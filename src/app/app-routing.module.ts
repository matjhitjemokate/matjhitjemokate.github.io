import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'employment-history',
    component: EmploymentHistoryComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  { 
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
