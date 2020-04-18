package com.hector.aplication.school.vanegas.controller;
	
	import java.util.HashMap;
	import java.util.List;
	import java.util.Map;
	import javax.validation.Valid;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.data.rest.webmvc.ResourceNotFoundException;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	import com.hector.aplication.school.vanegas.model.Student;
	import com.hector.aplication.school.vanegas.repository.StudentRepository;

	@RestController 
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/api/v1")
	public class StudentController {
	    
		@Autowired
	    private StudentRepository studentRepository;

	    @GetMapping("/liststudents")
	    public List<Student> getAllStudents() {
	        return studentRepository.findAll();
	    }

	    @GetMapping("/students/{dni}")
	    public ResponseEntity<Student> getStudentById(@PathVariable(value = "dni") Long studentDni)
	        throws ResourceNotFoundException {
	        Student student = studentRepository.findById(studentDni)
	          .orElseThrow(() -> new ResourceNotFoundException("Estudiante no enco0ntrado con este dni :: " + studentDni));
	        return ResponseEntity.ok().body(student);
	    }
	    
	    @PostMapping("/students")
	    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {
	         studentRepository.save(student);
	         return ResponseEntity.ok(student);
	    }

	    @PutMapping("/students/{dni}")
	    public ResponseEntity<Student> updateStudent(@PathVariable(value = "dni") Long studentDni,
	         @Valid @RequestBody Student studentDetails) throws ResourceNotFoundException {
	    	Student student = studentRepository.findById(studentDni)
	        .orElseThrow(() -> new ResourceNotFoundException("Estudiante no enco0ntrado con este id :: " + studentDni));

	    	student.setEmailId(studentDetails.getEmailId());
	    	student.setLastName(studentDetails.getLastName());
	    	student.setFirstName(studentDetails.getFirstName());
	    	student.setDni(studentDetails.getDni());
	    
	        final Student updatedStudent = studentRepository.save(student);
	        return ResponseEntity.ok(updatedStudent);
	    }

	    @DeleteMapping("/students/{dni}")
	    public Boolean deleteStudent(@PathVariable(value = "dni") Long studentDni)
	         throws ResourceNotFoundException {
	    	Boolean response = false; 
	        Student student = studentRepository.findById(studentDni)
	       .orElseThrow(() -> new ResourceNotFoundException("Estudiante no enco0ntrado con este id :: " + studentDni));

	        studentRepository.delete(student);
	        response = true;
	        
	       
	        return response;
	    }
	}


