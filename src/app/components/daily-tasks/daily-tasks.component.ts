import { Component, Optional } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Bundle, BundleEntry, FhirResource, Task, Subscription } from 'fhir/r4';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrl: './daily-tasks.component.scss'
})
export class DailyTasksComponent {

  result!: Bundle;
  entries: BundleEntry<FhirResource>[] = [];
  tasks: Task[] = [];

  constructor(@Optional() private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTasks();
    this.connectSocket();
  }

  async getTasks(): Promise<void> {
    //let result = await this.dataService.search('Task', { _count: '100', subject: 'Patient/example' } );
    let result = await this.dataService.search('Task', { _count: '100' });
    this.arrangeData(result);
  }

  private arrangeData(r: FhirResource | (FhirResource & { type: 'searchset' })) {
    this.result = r as Bundle;
    this.tasks = this.result.entry!.map(e => e.resource as Task)
    console.log(this.tasks);
  }

  async connectSocket() {
    let sub: Subscription = {resourceType: 'Subscription', status: 'active', reason: 'daarom', criteria: 'Task', channel: { type:'websocket'}};
    let s = await this.dataService.medplum.createResource(sub);
    let t = await this.dataService.medplum.get("/fhir/R4/Subscription/" + s.id + "/$get-ws-binding-token" );
    const token = t.parameter?.find((param:any) => param.name === 'token')?.valueString;
    const url = t.parameter?.find((param:any) => param.name === 'websocket-url')?.valueUrl;
    const ws = new WebSocket(url);

    ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ type: 'bind-with-token', payload: { token } }));
    });

    ws.addEventListener('message', (event: MessageEvent<string>) => {
      const bundle = JSON.parse(event.data) as Bundle;

      const firstResource = bundle.entry?.[0]?.resource;
      if (firstResource?.resourceType as any === 'SubscriptionStatus' && (firstResource as any).type as any === 'heartbeat') {
        // Ignore heartbeat bundles
        return;
      }

      this.getTasks();

    })

  }

}
