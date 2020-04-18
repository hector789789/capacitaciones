import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './component/student/create-student/create-student.component';
import { StudentDetailsComponent } from './component/student/detail-student/student-details.component';
import { StudentListComponent } from './component/student/list-student/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStudentComponent } from './component/student/update-student/update-student.component';
import { DeleteStudentComponent } from './component/student/delete-student/delete-student.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
