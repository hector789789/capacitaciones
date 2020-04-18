import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../student.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  dni: number;
  student: Student;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    this.student = new Student();
  }
  getStudent(){
    this.dni = this.student.dni;
   
    this.studentService.getStudent(this.dni)
        .subscribe(data => {
          if (data.dni > 0) {
            
            this.deleteStudent(data.dni);
          }
          else{
            swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.value) {
                swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
      
          }
        },response =>{
          if(response.error.message.length){
            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: response.error.message,
              
            })
           
          }
        });
        
    }
 
  deleteStudent(dni:number) {
    if(dni){
        swal.fire({title: 'Esta seguro?', text: "Quiere eliminar este estudiante!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminarlo!'
            }).then((result) => {
              if (result.value) {
                this.deleteStudentTwo(dni)
                
              }
            })
            
           } 

  }     
    deleteStudentTwo(dni:number) {
      
           this.studentService.deleteStudent(this.student.dni)
        .subscribe(response =>{
          console.log(response);
          if(response === "true"){
          swal.fire('Registro eliminado','El estudiante fue eliminado','success')
        }}, error => console.log(error));
      this.student = new Student();
      this.gotoList();     
  }
  
  onSubmit() {
    this.getStudent();    
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
}


  