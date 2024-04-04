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
import { AboutComponent } from './about/about.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { CareTeamComponent } from './care-team/care-team.component';
import { MyDataComponent } from './my-data/my-data.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DailyTasksComponent,
    SettingsComponent,
    PersonDataComponent,
    AboutComponent,
    ChangeProfileComponent,
    CareTeamComponent,
    MyDataComponent,
    TaskComponent
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
