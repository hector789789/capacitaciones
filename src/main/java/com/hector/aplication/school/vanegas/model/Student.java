package com.hector.aplication.school.vanegas.model;

	import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.Table;
	
	@Entity
	@Table(name = "student")
	public class Student {
	
		
//		@GeneratedValue(strategy=GenerationType.AUTO)  
//		@Column(name = "ID_STUDENT", nullable = false)
//	    private long id;
		@Column(name = "FIRST_NAME", nullable = false)
	    private String firstName;
		@Column(name = "LAST_NAME", nullable = false)
	    private String lastName;
		@Id  
		@Column(name = "DNI_IDENTIFICACION", nullable = false)
	    private long dni;
		@Column(name = "EMAIL", nullable = false)
	    private String emailId;
		@Column(name = "TELEFONO", nullable = false)
	    private String telefono;
		@Column(name = "CIUDAD", nullable = false)
	    private String ciudad;
		@Column(name = "TERMINOS", nullable = false)
	    private boolean terminos;
		
	 
	    public Student() {
	  
	    }
	    
	    public Student(String firstName, String lastName, int dni, String emailId, String telefono,
				String ciudad, boolean terminos) {

			
			this.firstName = firstName;
			this.lastName = lastName;
			this.dni = dni;
			this.emailId = emailId;
			this.telefono = telefono;
			this.ciudad = ciudad;
			this.terminos = terminos;
		}

		
	    public String getFirstName() {
	        return firstName;
	    }
	    public void setFirstName(String firstName) {
	        this.firstName = firstName;
	    }
	 
	   	    public String getLastName() {
	        return lastName;
	    }
	    public void setLastName(String lastName) {
	        this.lastName = lastName;
	    }
	 
	   
	    public long getDni() {
			return dni;
		}

		public void setDni(long dni) {
			this.dni = dni;
		}
		
		
	    public String getEmailId() {
	        return emailId;
	    }
	    public void setEmailId(String emailId) {
	        this.emailId = emailId;
	    }

		public String getTelefono() {
			return telefono;
		}

		public void setTelefono(String telefono) {
			this.telefono = telefono;
		}

		public String getCiudad() {
			return ciudad;
		}

		public void setCiudad(String ciudad) {
			this.ciudad = ciudad;
		}

		public boolean isTerminos() {
			return terminos;
		}

		public void setTerminos(boolean terminos) {
			this.terminos = terminos;
		}

		@Override
		public String toString() {
			return "Student  firstName=" + firstName + ", lastName=" + lastName + ", dni=" + dni
					+ ", emailId=" + emailId + ", telefono=" + telefono + ", ciudad=" + ciudad + ", terminos="
					+ terminos + "]";
		}

		
	   
	 
	}

