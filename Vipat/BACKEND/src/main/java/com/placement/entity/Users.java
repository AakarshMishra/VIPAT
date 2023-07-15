package com.placement.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Users {

	@Id
	private String userid;
	private String uname;
	private String pwd;
	private int cid;
	private String role;
	private boolean active;
	private LocalDateTime createdon;
	
	public Users(String userid, String uname, String pwd, int cid, String role, boolean active) {
		this.userid = userid;
		this.uname = uname;
		this.pwd = pwd;
		this.cid = cid;
		this.role = role;
		this.active = active;
		this.createdon=LocalDateTime.now();
	}
	
	public Users() {
		// TODO Auto-generated constructor stub
	}

	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public LocalDateTime getCreatedon() {
		return createdon;
	}
	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}
	@Override
	public String toString() {
		return "Users [uname=" + uname + ", userid=" + userid + ", pwd=" + pwd + ", cid=" + cid
				+ ", role=" + role + ", active=" + active + ", createdon=" + createdon
				+ "]";
	}
	
	
}
