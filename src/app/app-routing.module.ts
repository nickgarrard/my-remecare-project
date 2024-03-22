import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonDataComponent } from './person-data/person-data.component';
import { AboutComponent } from './about/about.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'daily-tasks', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'daily-tasks', component: DailyTasksComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'person-data', component: PersonDataComponent },
  { path: 'about', component: AboutComponent },
  { path: 'change-profile', component: ChangeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
