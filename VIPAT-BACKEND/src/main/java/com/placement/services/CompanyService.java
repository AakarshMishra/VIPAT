package com.placement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.placement.daos.CompanyRepository;
import com.placement.daos.JobRepository;
import com.placement.entity.Company;
import com.placement.entity.Job;

@Service
public class CompanyService {

	@Autowired UsersService uservice;
	@Autowired CompanyRepository repo;
	@Autowired JobRepository jrepo;
	
	public int saveCompany(Company cmp) {
		Company hh=repo.save(cmp);
		return hh.getId();
	}
	
	public List<Company> listAll(){
		return repo.findAll(Sort.by(Direction.DESC, "id"));
	}
	
	public Company getDetails(int id) {
		return repo.getById(id);
	}
	
	public void deleteById(int id) {
		Company std=repo.getById(id);
		repo.delete(std);
	}
	
	public void saveJob(Job job) {
		jrepo.save(job);
	}
	
	public List<Job> getAllJobs(){
		return jrepo.findAll(Sort.by(Direction.DESC, "id"));
	}
	
	public List<Job> getCompanyJobs(int cid){
		Company cmp=getDetails(cid);
		return jrepo.findByCompanyOrderByIdDesc(cmp);
	}
	
	public Job getJobDetails(int id) {
		return jrepo.getById(id);
	}
	
	public void deleteJob(int id) {
		Job job=jrepo.getById(id);
		jrepo.delete(job);
	}
}
