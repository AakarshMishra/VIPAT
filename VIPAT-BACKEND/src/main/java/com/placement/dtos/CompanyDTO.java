package com.placement.dtos;

import org.springframework.beans.BeanUtils;

import com.placement.entity.Company;
import com.placement.entity.HOD;

public class CompanyDTO extends Company{

	private String pwd;

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	@Override
	public String toString() {
		return "CompanyDTO [pwd=" + pwd + "]";
	}
	
	public static Company toEntity(CompanyDTO dto) {
		Company entity=new Company();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
}
