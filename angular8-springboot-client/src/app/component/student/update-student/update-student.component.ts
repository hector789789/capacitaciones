import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../student.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2'; 

import { CreateStudentComponent } from "../create-student/create-student.component";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
 
  dni: number;
  student: Student;
  formUpdatetudent: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { 
      this.formUpdatetudent = this.createdFormGroup();
    }

  ngOnInit() {
    this.student = new Student();
  }
  searchStudent(){
    
    this.studentService.getStudent(this.student.dni)
        .subscribe(data => {
          if (data.dni > 0) {
            
            this.student = data;
          //  this.childOne.save = data;
            // this.router.navigate(['/add']);
            console.log(this.student);
          }
          else{    
                swal.fire(
                  'Error en la búsqueda!',
                  'Estudiante no encontrado.',
                  'warning'
                )
              }
            })
      
          }

  updateStudent() {
    this.studentService.updateStudent(this.dni, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }
  onSubmit() {
    this.searchStudent();    
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
  createdFormGroup(){
    return new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      dni:new FormControl('',Validators.required),
      email: new FormControl('',Validators.email) ,
      telefono: new FormControl('',Validators.required) ,
      ciudad: new FormControl('',Validators.required) ,
      terminos: new FormControl('',Validators.requiredTrue) 
 
    })
  }
}
