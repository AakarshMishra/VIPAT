package com.placement.dtos;

import java.time.LocalDate;

public class JobApplyDTO {
	private int jid;
	private int sid;
	private LocalDate applydate;
	private String status;
	public JobApplyDTO() {
		// TODO Auto-generated constructor stub
		this.applydate=LocalDate.now();
		this.status="Applied";
	}
	public int getJid() {
		return jid;
	}
	public void setJid(int jid) {
		this.jid = jid;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public LocalDate getApplydate() {
		return applydate;
	}
	public void setApplydate(LocalDate applydate) {
		this.applydate = applydate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "JobApplyDTO [jid=" + jid + ", sid=" + sid + ", applydate=" + applydate + ", status=" + status + "]";
	}
	
	
	
	
}
