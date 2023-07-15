package com.placement.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class JobApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="student_id")
	private Student student;
	@ManyToOne
	@JoinColumn(name="job_id")
	private Job job;
	@ManyToOne
	@JoinColumn(name="cid")
	private Company company;
	private String status;
	private String remarks;
	private LocalDate applydate;
		
	
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public Job getJob() {
		return job;
	}
	public void setJob(Job job) {
		this.job = job;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDate getApplydate() {
		return applydate;
	}
	public void setApplydate(LocalDate applydate) {
		this.applydate = applydate;
	}
	
	public Company getCompany() {
		return company;
	}
	public void setCompany(Company company) {
		this.company = company;
	}
	@Override
	public String toString() {
		return "JobApplication [id=" + id + ", student=" + student + ", job=" + job + ", status=" + status
				+ ", applydate=" + applydate + "]";
	}
	
	
}
