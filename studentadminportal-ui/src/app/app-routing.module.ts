import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './students/view-student-old/view-student.component';

const routes: Routes = [
  { path:'',component:StudentsComponent },
  { path:'Students/:id',component:ViewStudentComponent},
  { path:'Students',component:StudentsComponent},
  { path:'student/add',component:ViewStudentComponent}
];

@NgModule({
  imports:[(RouterModule.forRoot(routes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
