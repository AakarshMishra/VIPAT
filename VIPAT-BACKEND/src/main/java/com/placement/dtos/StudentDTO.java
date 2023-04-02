package com.placement.dtos;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.placement.entity.Student;

public class StudentDTO {
	private String sname;
	private String address;
	private String gender;
	@JsonFormat(pattern = "YYYY-MM-dd")
	private LocalDate dob;
	private String phone;
	private String email;
	private String branch;
	private String pwd;
	private MultipartFile photo;
	
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

	public String getBranch() {
		return branch;
	}



	public void setBranch(String branch) {
		this.branch = branch;
	}



	public String getPwd() {
		return pwd;
	}



	public void setPwd(String pwd) {
		this.pwd = pwd;
	}



	public MultipartFile getPhoto() {
		return photo;
	}



	public void setPhoto(MultipartFile photo) {
		this.photo = photo;
	}

	@Override
	public String toString() {
		return "StudentDTO [sname=" + sname + ", address=" + address + ", gender=" + gender + ", dob=" + dob
				+ ", phone=" + phone + ", email=" + email + ", college=" + ", branch=" + branch + ", pwd="
				+ pwd + ", photo=" + photo + "]";
	}



	public static Student toEntity(StudentDTO dto) {
		Student entity=new Student();
		BeanUtils.copyProperties(dto, entity,"photo");		
		return entity;
	}
}
