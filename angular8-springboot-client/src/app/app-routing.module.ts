import { StudentDetailsComponent } from './component/student/detail-student/student-details.component';
import { CreateStudentComponent } from './component/student/create-student/create-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './component/student/list-student/student-list.component';
import { UpdateStudentComponent } from './component/student/update-student/update-student.component';
import { DeleteStudentComponent } from './component/student/delete-student/delete-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: CreateStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'delete/:id', component: DeleteStudentComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
