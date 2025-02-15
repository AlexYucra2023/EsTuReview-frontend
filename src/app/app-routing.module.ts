import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { UserApp } from './model/UserApp';
import { UserAppComponent } from './components/user-app/user-app.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { ModerationAction } from './model/ModerationAction';
import { ModerationActionComponent } from './components/moderation-action/moderation-action.component';
import { ReviewComment } from './model/ReviewComment';
import { ReviewComentComponent } from './components/review-coment/review-coment.component';
import { RoleComponent } from './components/role/role.component';
import { UniversityComponent } from './components/university/university.component';
import { CourseComponent } from './components/course/course.component';
import { ReviewComponent } from './components/review/review.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NawAllInsertCourseComponent } from './components/course/naw-all-insert-course/naw-all-insert-course.component';
import { AddEditUniversityComponent } from './components/university/add-edit-university/add-edit-university.component';


const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: UserAppComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'moderation-action', component: ModerationActionComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'review-comment', component: ReviewComentComponent },
  { path: 'role', component: RoleComponent },
  { path: 'course', component: CourseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crear-course', component:NawAllInsertCourseComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'add-edit-university', component: AddEditUniversityComponent },
  { path: 'new', component: AddEditUniversityComponent},
  { path: 'edit/:universityId', component: AddEditUniversityComponent},
  

  
  //falta linkear con una vista de dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
