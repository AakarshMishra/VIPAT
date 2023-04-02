package com.placement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.placement.daos.HodRepository;
import com.placement.entity.HOD;

@Service
public class HodService {

	@Autowired HodRepository repo;
	
	public int saveHOD(HOD hod) {
		HOD hh=repo.save(hod);
		return hh.getId();
	}
	
	public List<HOD> listAll(){
		return repo.findAll(Sort.by(Direction.DESC, "id"));
	}
	
	public HOD getDetails(int id) {
		return repo.getById(id);
	}
	
	public void deleteById(int id) {
		HOD std=repo.getById(id);
		repo.delete(std);
	}
}
