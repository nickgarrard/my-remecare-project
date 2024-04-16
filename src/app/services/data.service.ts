import { Injectable, Optional, SkipSelf } from '@angular/core';
import { MedplumClient } from '@medplum/core';
import Client from 'fhir-kit-client';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  isRemecare = true;
  clientId = "32839b15-89d3-448c-88a7-0f399e55ff08";
  secret = "9e2efe199591801079c6794fa84d07041d924d3639e776e94461c9381b91c6c8";

  //fhirClient = new Client({ baseUrl: 'https://demo.kodjin.com/fhir/' });
  fhirClient = new Client({ baseUrl: 'http://sqlonfhir-r4.azurewebsites.net/fhir/' });
  medplum = new MedplumClient({ baseUrl: 'https://fhir.rc-dev.remecare.eu/' });

  constructor(@Optional() @SkipSelf() sharedService?: DataService) {
    if (sharedService) {
      throw new Error('DataService is already loaded');
    }
    this.loginViaSecret(this.clientId, this.secret);
    console.log('DataService created');
  }

  private loginViaSecret(clientId: string, clientSecret: string) {
         this.medplum.startClientLogin(clientId, clientSecret);
  }

  async search(resourceType: string, searchParams?: any) {
    // Remove fields which are undefined
    // Object.keys(searchParams).forEach(key => searchParams[key] === undefined ? delete searchParams[key] : {});
    if (this.isRemecare) {
      return await this.medplum.search(resourceType, searchParams);
    }
    return await this.fhirClient.search({ resourceType: resourceType, searchParams });
  }

  async read(resourceType: string, id: string) {
    if (this.isRemecare) {
      return await this.medplum.readResource(resourceType, id);
    }
    return await this.fhirClient.read({ resourceType: resourceType, id, });
  }

}
