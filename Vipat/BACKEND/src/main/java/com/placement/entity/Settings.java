package com.placement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Settings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String college;
	private String address;
	private String email;
	private String phone;
	private String website;
	private String dean;
	
	public Settings(String college, String address) {
		this.college = college;
		this.address = address;
	}
	public Settings() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getDean() {
		return dean;
	}
	public void setDean(String dean) {
		this.dean = dean;
	}
	@Override
	public String toString() {
		return "Settings [id=" + id + ", college=" + college + ", address=" + address + ", email=" + email + ", phone="
				+ phone + ", website=" + website + ", dean=" + dean + "]";
	}
	
}
