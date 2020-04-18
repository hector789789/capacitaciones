import { Student } from '../student';
import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../../student.service';
import { StudentListComponent } from '../list-student/student-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2'; 


@Component({
  selector: 'app-employee-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  dni:number;
  student: Student;
  formSearchStuden: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { 
      this.formSearchStuden = this.createdFormGroup();

    }

  ngOnInit() {
    this.student = new Student();
  }
  onSubmit() {
    this.searchEstudent();    
  }
  searchEstudent(){
    this.dni = this.student.dni;   
    
    this.studentService.getStudent(this.dni)
        .subscribe(data => {
          if (data.dni > 0) {
            
            this.student = data;
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
      

  list(){
    this.router.navigate(['students']);
  }
  createdFormGroup(){
    return new FormGroup({
      dni:new FormControl('',Validators.required),
      
    })
  }
}
