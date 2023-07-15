package com.placement.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placement.dtos.CompanyDTO;
import com.placement.dtos.JobDTO;
import com.placement.dtos.Response;
import com.placement.dtos.UpdateStatusDTO;
import com.placement.entity.Company;
import com.placement.entity.Job;
import com.placement.entity.JobApplication;
import com.placement.entity.Users;
import com.placement.services.CompanyService;
import com.placement.services.EmailService;
import com.placement.services.JobApplyService;
import com.placement.services.StudentService;
import com.placement.services.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/company")
public class CompanyController {
	@Autowired UsersService uservice;
	@Autowired CompanyService cservice;
	@Autowired JobApplyService jservice;
	@Autowired StudentService sservice;
	@Autowired EmailService email;
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody CompanyDTO dto) {
		int id=cservice.saveCompany(CompanyDTO.toEntity(dto));
		Users user=new Users(dto.getEmail(),dto.getCname(),dto.getPwd(),id,"Company",true);
		uservice.AddUser(user);
		return Response.success("Company created successfully");
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody CompanyDTO dto) {
		Company cmp=CompanyDTO.toEntity(dto);
		cmp.setId(id);
		cservice.saveCompany(cmp);
		return Response.success("Company updated successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> listAllCompanies() {
		List<Company> result = cservice.listAll();
		return Response.success(result);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findCompanyById(@PathVariable("id") int id) {
		Company result = cservice.getDetails(id);
		return Response.success(result);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> DeleteCompanyById(@PathVariable("id") int id) {
		cservice.deleteById(id);
		uservice.deleteUser(id);
		return Response.success("Company deleted successfully");
	}
	
	@PostMapping("/jobs")
	public ResponseEntity<?> saveJob(@RequestBody JobDTO dto) {
		Job job=JobDTO.toEntity(dto);
		Company cmp=cservice.getDetails(dto.getCid());
		job.setCompany(cmp);
		cservice.saveJob(job);
		return Response.success("Job Created Successfully");
	}
	
	@GetMapping("/jobs")
	public ResponseEntity<?> listAllJobs() {
		List<Job> result = cservice.getAllJobs();
		return Response.success(result);
	}
	
	@GetMapping("/jobs/{cid}")
	public ResponseEntity<?> listCompanyJobs(@PathVariable("cid") int cid) {
		List<Job> result = cservice.getCompanyJobs(cid);
		return Response.success(result);
	}
	
	@GetMapping("/jobs/details/{id}")
	public ResponseEntity<?> getJobDetails(@PathVariable("id") int id) {
		Job result = cservice.getJobDetails(id);
		return Response.success(result);
	}
	
	@DeleteMapping("/jobs/{id}")
	public ResponseEntity<?> DeleteJobById(@PathVariable("id") int id) {
		cservice.deleteJob(id);
		return Response.success("Job deleted successfully");
	}
	
	@GetMapping("/applications/{cid}")
	public ResponseEntity<?> findApplicationsByStudentId(@PathVariable("cid") int cid) {
		List<JobApplication> result = jservice.listCompanyApplication(cid);
		return Response.success(result);
	}
	
	@GetMapping("/applications/details/{id}")
	public ResponseEntity<?> findApplicationDetailsById(@PathVariable("id") int jid) {
		JobApplication result = jservice.findDetails(jid);
		return Response.success(result);
	}
	
	@PostMapping("/applications/update")
	public ResponseEntity<?> updateStatus(@RequestBody UpdateStatusDTO dto) {
		jservice.udpateStatus(dto);
		JobApplication job=jservice.findDetails(dto.getJid());
		if(dto.getStatus().equals("Approved")) {
			String subject=dto.getStatus().equals("Approved")?"Congratulations for Selection":"";
			email.sendMail(job.getStudent().getEmail(), subject, 
					"<!DOCTYPE html>    \r\n"
					+ "<html>    \r\n"
					+ "<head>\r\n"
					+ "<title>Ornaments</title>\r\n"
					+ "<link rel=\"shortcut icon\" href=\"favicon.ico\">\r\n"
					+ "<style type=\"text/css\">\r\n"
					+ "table[name=\"blk_permission\"], table[name=\"blk_footer\"] {display:none;} \r\n"
					+ "</style>\r\n"
					+ "<meta name=\"googlebot\" content=\"noindex\" />\r\n"
					+ "<META NAME=\"ROBOTS\" CONTENT=\"NOINDEX, NOFOLLOW\"/>    \r\n"
					+ "<meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">       \r\n"
					+ "</head>    \r\n"
					+ "<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style=\"height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;\">    \r\n"
					+ "    \r\n"
					+ "<table name=\"bmeMainBody\" style=\"background-color: rgb(143, 229, 201);\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" bgcolor=\"#8fe5c9\"><tbody><tr><td width=\"100%\" valign=\"top\" align=\"center\"><table name=\"bmeMainColumnParentTable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"bmeMainColumnParent\" style=\"border-collapse: separate;\">   <table name=\"bmeMainColumn\" class=\"bmeHolder\" style=\"max-width: 600px; border-radius: 0px;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\"><tbody><tr><td style=\"color: rgb(102, 102, 102); border: 0px none transparent;\" class=\"blk_container bmeHolder\" name=\"bmePreHeader\" width=\"100%\" valign=\"top\" bgcolor=\"\" align=\"center\"><div id=\"dv_1\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_permission\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"tblCell\" style=\"padding:20px;\"><table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"bmePermissionText\" style=\"text-align: left;\" align=\"left\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;\"><a style=\"color: #16a7e0;\" target=\"_new\" href=\"[ViewWebURL]\"></a><br> <a style=\"color: #16a7e0;\" target=\"_new\" href=\"[ConfirmURL]\"></a> <a style=\"color: #16a7e0;\" target=\"_new\" href=\"[UnsubscribeURL]\"></a>.</span></td></tr></tbody></table></td></tr></tbody></table></div></td></tr>   <tr><td class=\"bmeHolder\" name=\"bmeMainContentParent\" style=\"border-collapse: separate;\" width=\"100%\" valign=\"top\" align=\"center\"><table name=\"bmeMainContent\" style=\"border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: hidden; border: 0px none rgb(102, 102, 102);\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\"><tbody><tr><td class=\"blk_container bmeHolder\" name=\"bmeHeader\" style=\"border: 0px none transparent; background-color: rgb(143, 229, 201);\" width=\"100%\" valign=\"top\" bgcolor=\"#8fe5c9\" align=\"center\"><div id=\"dv_2\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_divider\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tblCellMain\" style=\"padding: 10px 0px;\"><table class=\"tblLine\" style=\"border-top-width: 0px; border-top-style: none; border-top-color: rgb(225, 225, 225); min-width: 600px;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><span></span></td></tr></tbody></table></td></tr></tbody></table></div></td></tr> <tr><td style=\"color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(81, 184, 151);\" class=\"blk_container bmeHolder\" name=\"bmeBody\" width=\"100%\" valign=\"top\" bgcolor=\"#51b897\" align=\"center\"><div id=\"dv_15\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_divider\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tblCellMain\" style=\"padding: 15px 0px;\"><table class=\"tblLine\" style=\"border-top-width: 0px; border-top-style: none; border-top-color: rgb(225, 225, 225); min-width: 600px;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><span></span></td></tr></tbody></table></td></tr></tbody></table></div></td></tr> <tr><td width=\"100%\"> <table style=\"color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(81, 184, 151);\" class=\"bmeHolder\" name=\"bmeBody\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" bgcolor=\"#51b897\" align=\"center\"> <tbody><tr> <td width=\"100%\" valign=\"top\" align=\"center\">   <div><table class=\"blk_parent1\" style=\"max-width: 600px;\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\"><tbody><tr><td class=\"tdPart\" width=\"50%\" valign=\"top\" align=\"center\">  <table class=\"bmeHolder1\" style=\"float:left;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td class=\"blk_container\" name=\"bmeLeftColumn\" style=\"border: 0px none transparent;\" valign=\"top\" bgcolor=\"\" align=\"center\"><div id=\"dv_5\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_image\" style=\"border-width: 0px; border-color: transparent; border-style: none;\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"bmeImage\" style=\"padding: 0px;\" align=\"center\"><img src=\"https://www.benchmarkemail.com/images/templates_n/new_editor/Templates/Ornaments/Ornaments.jpg\" style=\"max-width: 600px; display: block;\" alt=\"\" width=\"300\" border=\"0\"></td></tr></tbody></table></div></td></tr></tbody></table></td><td class=\"tdPart\" width=\"50%\" valign=\"top\" align=\"center\"> <table class=\"bmeHolder1\" style=\"float:right;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"right\"><tbody><tr><td class=\"blk_container\" name=\"bmeRightColumn\" style=\"color: rgb(56, 56, 56); border: 0px none transparent;\" valign=\"top\" bgcolor=\"\" align=\"center\"><div id=\"dv_3\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_divider\" style=\"\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tblCellMain\" style=\"padding: 5px 20px;\"><table class=\"tblLine\" style=\"border-top-width: 0px; border-top-style: none; border-top-color: rgb(225, 225, 225); min-width: 260px;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><span></span></td></tr></tbody></table></td></tr></tbody></table></div><div id=\"dv_4\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_text\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tdPart\" valign=\"top\" align=\"center\"><table name=\"tblText\" style=\"float:left; background-color:transparent;\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td name=\"tblCell\" style=\"padding: 10px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 150%; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"line-height: 100%;\"><em><span style=\"font-size: 36px; font-family: Palatino, 'Book Antiqua', 'Times New Roman', Times, serif; color: #ffffff; line-height: 100%;\">Congratulation on</span></em><br><strong><span style=\"font-size: 60px; line-height: 100%;\"><em><span style=\"font-family: Palatino, 'Book Antiqua', 'Times New Roman', Times, serif; color: #ffffff; line-height: 100%;\">Selection</span></em></span></strong></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div id=\"dv_9\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_text\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tdPart\" valign=\"top\" align=\"center\"><table name=\"tblText\" style=\"float:left; background-color:transparent;\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td name=\"tblCell\" style=\"padding: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 150%; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\"><span style=\"font-size: 14px; font-family: Palatino, 'Book Antiqua', 'Times New Roman', Times, serif; color: #ffffff; line-height: 150%;\">Dear "+job.getStudent().getSname()+"<br><br>\r\n"
					+ "\r\n"
					+ "Thank you for taking the time to interview for the "+job.getJob().getDesignation()+" position. We enjoyed getting to know you. We have completed all of our interviews.\r\n"
					+ "\r\n"
					+ "I am pleased to inform you that we would like to offer you the position. We believe your past experience and strong skills will be an asset to our company. \r\n"
					+ "\r\n"
					+ "Please respond to this email by tommorow to let us know if you would like to accept the  position.\r\n"
					+ "\r\n"
					+ "I look forward to hearing from you.<br><br>Sincerely,<br>"+job.getCompany().getCname()+"</span></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div id=\"dv_7\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_divider\" style=\"\" width=\"300\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tblCellMain\" style=\"padding: 15px 20px;\"><table class=\"tblLine\" style=\"border-top-width: 0px; border-top-style: none; border-top-color: rgb(225, 225, 225); min-width: 260px;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><span></span></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table>  </td></tr></tbody></table></div>  </td> </tr> </tbody></table> </td></tr> <tr><td style=\"color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(143, 229, 201);\" class=\"blk_container bmeHolder\" name=\"bmePreFooter\" width=\"100%\" valign=\"top\" bgcolor=\"#8fe5c9\" align=\"center\"><div id=\"dv_10\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tdPart\" valign=\"top\" align=\"center\"><table name=\"tblText\" style=\"float:left; background-color:transparent;\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td name=\"tblCell\" style=\"padding: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 150%; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"text-align: center; line-height: 150%;\" align=\"center\"><strong><span style=\"font-size: 14px; font-family: Palatino, 'Book Antiqua', 'Times New Roman', Times, serif; color: #a5915f; line-height: 150%;\">VIT CHENNAI</span></strong><br><strong><span style=\"font-size: 14px; font-family: Palatino, 'Book Antiqua', 'Times New Roman', Times, serif; color: #a5915f; line-height: 150%;\">www.vitchennai.ac.in</span></strong></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div id=\"dv_6\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_divider\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tblCellMain\" style=\"padding: 10px 20px;\"><table class=\"tblLine\" style=\"border-top-width: 0px; border-top-style: none; border-top-color: rgb(225, 225, 225); min-width: 560px;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><span></span></td></tr></tbody></table></td></tr></tbody></table></div></td></tr> </tbody></table></td> </tr>  <tr><td style=\"color: rgb(102, 102, 102); border: 0px none transparent;\" class=\"blk_container bmeHolder\" name=\"bmeFooter\" width=\"100%\" valign=\"top\" bgcolor=\"\" align=\"center\"><div id=\"dv_14\" class=\"blk_wrapper\"><table class=\"blk\" name=\"blk_footer\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"tblCell\" style=\"padding:20px;\"><table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"bmeBadgeText\" style=\"text-align: center;\" align=\"center\"><span id=\"spnFooterText\" style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\"><var type=\"BME_CANSPAM\"><span style=\"text-decoration:underline;\"></span></var><br><var type=\"BME_ADDRESS\">VIT CHENNAI KELAMBAKKAM ROAD,600127</var></span><br><br><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\"><var type=\"BME_LINKS\"><span style=\"text-decoration:underline\" href=\"#\"></span><span style=\"text-decoration:underline;\"></span> | <span style=\"text-decoration:underline;\"></span> |  <span style=\"text-decoration:underline;\"></span>  |  <span style=\"text-decoration:underline;\"></span></var><br></span></td></tr><tr><td name=\"bmeBadgeImage\" style=\"text-align: center; padding-top: 20px; word-break: break-all;\" align=\"center\"><var type=\"BME_BADGE\"></var></td></tr></tbody></table></td></tr></tbody></table></div></td></tr> </tbody></table> </td></tr></tbody></table></td></tr></tbody></table>    \r\n"
					+ "</body>    \r\n"
					+ "</html>        \r\n"
					+ "   \r\n"
					+ "");
		}
		return Response.success("Status updated successfully");
	}
	
	@GetMapping("/selected")
	public ResponseEntity<?> getSelectedStudents() {
		List<JobApplication> result = jservice.listSelectedCandidates();
		return Response.success(result);
	}
}
