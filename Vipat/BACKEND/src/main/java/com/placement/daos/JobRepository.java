package com.placement.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.entity.Company;
import com.placement.entity.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {

	List<Job> findByCompanyOrderByIdDesc(Company company);
}
