import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-remecare-project';

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  
}
