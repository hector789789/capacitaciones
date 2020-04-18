import { StudentService } from '../../../student.service';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  formCreateStuden: FormGroup;
  prueba = '';

  constructor(private studentService: StudentService,
    private router: Router) {
      this.formCreateStuden = this.createdFormGroup();

     }
    
  ngOnInit() {
    
  }
  onResetFomr(){
    this.formCreateStuden.reset();
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

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.createStudent(this.student)
      .subscribe(response =>  {
        if (response) {
          this.student.ciudad = '';
          this.student.dni = null;
          this.student.email = '';
          this.student.firstName = '';
          this.student.lastName = '';
          this.student.telefono = '';
          this.student.terminos = null;
          swal.fire('Buen trabajo!','Estudiante creado.','success');
          this.router.navigate(['/students']);
              
      }
      
      else{
        swal.fire('Error en la petición!','Estudiante  no fue creado.','warning') ;
          }
        })
  
    this.student = new Student();
   // this.gotoList();
  }

  onSubmit() {
    // this.submitted = true;
    this.validateField();    
  }
  validateField(){
   
    if(!this.student.dni || !this.student.email || !this.student.firstName || !this.student.lastName || !this.student.telefono || !this.student.ciudad){
      swal.fire('Validación de campos','Todos los campos son requeridos','warning')
      this.router.navigate(['/add']);
    } 
    else{
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['/add']);
  }
}
