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

import com.placement.dtos.CompanyDTO;
import com.placement.dtos.HodDto;
import com.placement.dtos.Response;
import com.placement.entity.Company;
import com.placement.entity.HOD;
import com.placement.entity.Users;
import com.placement.services.HodService;
import com.placement.services.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/hod")
public class HODController {

	@Autowired UsersService uservice;
	@Autowired HodService hservice;
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody HodDto dto) {
		int id=hservice.saveHOD(HodDto.toEntity(dto));
		Users user=new Users(dto.getEmail(),dto.getName(),dto.getPwd(),id,"Proctor",true);
		uservice.AddUser(user);
		return Response.success("HOD Created Successfully");
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody HodDto dto) {
		HOD hod=HodDto.toEntity(dto);
		hod.setId(id);
		hservice.saveHOD(hod);
		return Response.success("HoD updated successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> listAllHODs() {
		List<HOD> result = hservice.listAll();
		return Response.success(result);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findHODById(@PathVariable("id") int id) {
		HOD result = hservice.getDetails(id);
		return Response.success(result);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> DeleteHODById(@PathVariable("id") int id) {
		hservice.deleteById(id);
		uservice.deleteUser(id);
		return Response.success("HOD deleted successfully");
	}
	
}
