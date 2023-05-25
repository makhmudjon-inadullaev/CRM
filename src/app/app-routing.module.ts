import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component'
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { TeamCompoennt } from './home/team/team.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SettingsComponent } from './home/settings/settings.component';
import { ReportsComponent } from './home/reports/reports.component';
import { DocumentsComponent } from './home/documents/documents.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { LearningCompoennt } from './home/learning/learning.component';
import { TemplateDrivenFormsComponent } from './home/learning/forms/td/td.component';
import { ReactiveFormsComponent } from './home/learning/forms/reactive/reactive.component';
import { LearningInitialComponent } from './home/learning/initial/initial.component';
import { PipesDemoComponent } from './home/learning/pipes/demo/demo.component';
import { HttpDemoComponent } from './home/learning/http/demo/demo.component';
import { HttpDemoCreatePostComponent } from './home/learning/http/demo/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './home/learning/http/demo/posts.service';
import { authGuard, authRouteGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [authRouteGuard],
    children: [
      { path: 'login', component: SigninComponent },
      { path: '**', redirectTo: 'login' },
    ]
  },
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'team', component: TeamCompoennt },
      { path: 'projects', component: ProjectsComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      {
        path: 'learning',
        component: LearningCompoennt,
        children: [
          { path: '', component: LearningInitialComponent },
          { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
          { path: 'reactive-forms', component: ReactiveFormsComponent },
          { path: 'pipes', component: PipesDemoComponent },
          {
            path: 'http',
            children: [
              { path: '', component: HttpDemoComponent },
              { path: 'create', component: HttpDemoCreatePostComponent },
              { path: 'edit/:id', component: HttpDemoCreatePostComponent },
            ]
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  providers: [PostsService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
