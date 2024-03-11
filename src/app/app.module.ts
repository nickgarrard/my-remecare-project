import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonDataComponent } from './person-data/person-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DailyTasksComponent,
    SettingsComponent,
    PersonDataComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
