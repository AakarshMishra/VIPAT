package com.placement.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.placement.dtos.HodDto;
import com.placement.dtos.JobApplyDTO;
import com.placement.dtos.Response;
import com.placement.dtos.StudentDTO;
import com.placement.dtos.StudentDetailsDTO;
import com.placement.entity.HOD;
import com.placement.entity.JobApplication;
import com.placement.entity.Student;
import com.placement.entity.Users;
import com.placement.services.JobApplyService;
import com.placement.services.StudentService;
import com.placement.services.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/students")
public class StudentController {

	@Autowired UsersService uservice;
	@Autowired StudentService sservice;
	@Autowired JobApplyService jservice;
	
	@PostMapping
	public ResponseEntity<?> save(StudentDTO dto) {
		System.out.println(dto);
		Student std=StudentDTO.toEntity(dto);
		int cid=sservice.saveStudent(std, dto.getPhoto());
		Users user=new Users(dto.getEmail(),dto.getSname(),dto.getPwd(),cid,"Student",true);
		uservice.AddUser(user);
		return Response.success("Student Created Successfully");
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id,StudentDTO dto) {
		Student std=StudentDTO.toEntity(dto);
		Student existing=sservice.findById(id);
		std.setId(id);
		std.setPhoto(existing.getPhoto());
		sservice.updateStudent(std);
		return Response.success("Student updated successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> listAllStudents() {
		List<Student> result = sservice.findAll();
		return Response.success(result);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findStudentById(@PathVariable("id") int id) {
		Student result = sservice.findById(id);
		return Response.success(result);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> DeleteStudentById(@PathVariable("id") int id) {
		sservice.deleteById(id);
		uservice.deleteUser(id);
		return Response.success("Student deleted successfully");
	}
	
	@PostMapping("upload")
	public ResponseEntity<?> saveDetails(StudentDetailsDTO dto) {
		System.out.println(dto);
		sservice.updateDetails(dto);
		return Response.success("Student details updated Successfully");
	}
	
	@PostMapping("apply")
	public ResponseEntity<?> applyJob(@RequestBody JobApplyDTO dto) {
		jservice.saveApply(dto);
		return Response.success("Job applied Successfully");
	}
	
	@GetMapping("/applied/{sid}")
	public ResponseEntity<?> findApplicationsByStudentId(@PathVariable("sid") int sid) {
		List<JobApplication> result = jservice.listStudentApplications(sid);
		return Response.success(result);
	}
}
