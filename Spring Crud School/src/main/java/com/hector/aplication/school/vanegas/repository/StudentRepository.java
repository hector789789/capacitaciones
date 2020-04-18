package com.hector.aplication.school.vanegas.repository;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;
	import com.hector.aplication.school.vanegas.model.Student;

	
	@Repository
	public interface StudentRepository extends JpaRepository<Student, Long>{

	}

