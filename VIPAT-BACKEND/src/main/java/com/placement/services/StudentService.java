package com.placement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.placement.daos.StudentRepository;
import com.placement.dtos.StudentDetailsDTO;
import com.placement.entity.Student;
import com.placement.utils.StorageService;

@Service
public class StudentService {

	@Autowired StorageService storageService;
	@Autowired StudentRepository repo;
	
	public int saveStudent(Student s,MultipartFile photo) {
		String cphoto=storageService.store(photo);
		s.setPhoto(cphoto);
		Student ss=repo.save(s);
		return ss.getId();
	}
	
	public void updateStudent(Student s) {
		repo.save(s);
	}
	
	public List<Student> findAll(){
		return repo.findAll(Sort.by(Direction.DESC, "id"));
	}
	
	public Student findById(int id) {
		return repo.getById(id);
	}
	
	public void deleteById(int id) {
		Student std=repo.getById(id);
		repo.delete(std);
	}
	
	public void updateDetails(StudentDetailsDTO dto) {
		Student ss=repo.getById(dto.getId());
		if(dto.getResume()!=null) {
			String resume=storageService.store(dto.getResume());
			ss.setResume(resume);
		}
		ss.setBranch(dto.getBranch());
		ss.setXthyear(dto.getXthyear());
		ss.setXiithyear(dto.getXiithyear());
		ss.setGradyear(dto.getGradyear());
		ss.setXthpercent(dto.getXthpercent());
		ss.setXiithpercent(dto.getXiithpercent());
		ss.setGradgpa(dto.getGradgpa());
		ss.setXiithpercent(dto.getXiithpercent());
		repo.save(ss);
	}
}
