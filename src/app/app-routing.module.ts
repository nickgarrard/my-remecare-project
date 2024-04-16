import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailyTasksComponent } from './components/daily-tasks/daily-tasks.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PersonDataComponent } from './components/person-data/person-data.component';
import { AboutComponent } from './components/about/about.component';
import { ChangeProfileComponent } from './components/change-profile/change-profile.component';
import { CareTeamComponent } from './components/care-team/care-team.component';
import { MyDataComponent } from './components/my-data/my-data.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: '', redirectTo: 'daily-tasks', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'daily-tasks', component: DailyTasksComponent },
  { path: 'task', component: TaskComponent },
  { path: 'my-data', component: MyDataComponent },
  { path: 'care-team', component: CareTeamComponent },
  { path: 'person-data', component: PersonDataComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'change-profile', component: ChangeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
