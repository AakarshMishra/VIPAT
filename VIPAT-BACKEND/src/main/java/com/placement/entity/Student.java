package com.placement.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String sname;
	private String address;
	private String gender;
	@JsonFormat(pattern = "YYYY-MM-dd")
	private LocalDate dob;
	private String phone;
	private String email;
	private String photo;
	private String branch;
	private int xthyear;
	private int xthpercent;
	private int xiithyear;
	private int xiithpercent;
	private int gradyear;
	private int gradgpa; 
	private String resume;
	private LocalDateTime createdon;
	
	public Student() {
		// TODO Auto-generated constructor stub
		this.createdon=LocalDateTime.now();
	}
	
	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public LocalDateTime getCreatedon() {
		return createdon;
	}
	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getXthyear() {
		return xthyear;
	}
	public void setXthyear(int xthyear) {
		this.xthyear = xthyear;
	}
	public int getXthpercent() {
		return xthpercent;
	}
	public void setXthpercent(int xthpercent) {
		this.xthpercent = xthpercent;
	}
	public int getXiithyear() {
		return xiithyear;
	}
	public void setXiithyear(int xiithyear) {
		this.xiithyear = xiithyear;
	}
	public int getXiithpercent() {
		return xiithpercent;
	}
	public void setXiithpercent(int xiithpercent) {
		this.xiithpercent = xiithpercent;
	}
	public int getGradyear() {
		return gradyear;
	}
	public void setGradyear(int gradyear) {
		this.gradyear = gradyear;
	}
	public int getGradgpa() {
		return gradgpa;
	}
	public void setGradgpa(int gradgpa) {
		this.gradgpa = gradgpa;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", sname=" + sname + ", address=" + address + ", gender=" + gender + ", dob=" + dob
				+ ", phone=" + phone + ", email=" + email + ", photo=" + photo + ", college=" + ", branch="
				+ branch + ", xthyear=" + xthyear + ", xthpercent=" + xthpercent + ", xiithyear=" + xiithyear
				+ ", xiithpercent=" + xiithpercent + ", gradyear=" + gradyear + ", gradgpa=" + gradgpa + ", createdon="
				+ createdon + "]";
	}
	
	
	
}
