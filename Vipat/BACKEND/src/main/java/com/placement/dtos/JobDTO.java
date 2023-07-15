package com.placement.dtos;

import org.springframework.beans.BeanUtils;

import com.placement.entity.Job;

public class JobDTO {
	private String designation;
	private String experience;
	private int xiithpercent;
	private int gradgpa;
	private String description;
	private int nos;
	private int cid;
	private String salpackage;
	
	public String getSalpackage() {
		return salpackage;
	}
	public void setSalpackage(String salpackage) {
		this.salpackage = salpackage;
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
	public int getNos() {
		return nos;
	}
	public void setNos(int nos) {
		this.nos = nos;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	@Override
	public String toString() {
		return "JobDTO [designation=" + designation + ", experience=" + experience + ", xiithpercent=" + xiithpercent
				+ ", gradgpa=" + gradgpa + ", description=" + description + ", nos=" + nos + ", cid=" + cid + "]";
	}
	
	public static Job toEntity(JobDTO dto) {
		Job entity=new Job();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
}
