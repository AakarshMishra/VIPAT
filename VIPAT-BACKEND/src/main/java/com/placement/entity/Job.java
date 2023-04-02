package com.placement.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String designation;
	private String experience;
	private int xiithpercent;
	private int gradgpa;
	private String description;
	private int nos;
	private String salpackage;
	private LocalDateTime createdon;
	
	@ManyToOne
	@JoinColumn(name="cid")
	private Company company;
	
	public String getSalpackage() {
		return salpackage;
	}

	public void setSalpackage(String salpackage) {
		this.salpackage = salpackage;
	}

	public Job() {
		createdon=LocalDateTime.now();
	}
	
	public int getNos() {
		return nos;
	}

	public void setNos(int nos) {
		this.nos = nos;
	}

	public LocalDateTime getCreatedon() {
		return createdon;
	}


	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public int getXiithpercent() {
		return xiithpercent;
	}

	public void setXiithpercent(int xiithpercent) {
		this.xiithpercent = xiithpercent;
	}

	public int getGradgpa() {
		return gradgpa;
	}

	public void setGradgpa(int gradgpa) {
		this.gradgpa = gradgpa;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Job [id=" + id + ", designation=" + designation + ", experience=" + experience + ", xiithpercent="
				+ xiithpercent + ", gradgpa=" + gradgpa + ", description=" + description + ", company=" + company + "]";
	}
	
	
}
