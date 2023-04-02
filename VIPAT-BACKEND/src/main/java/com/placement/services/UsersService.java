package com.placement.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.placement.daos.UsersRepository;
import com.placement.entity.Settings;
import com.placement.entity.Users;

@Service
public class UsersService {

	@Autowired UsersRepository repo;
	@Autowired SettingsService settings;
	
	public void createAdmin() {
		if(repo.count()==0) {
			repo.save(new Users("admin","Administrator","admin",0,"Admin",true));
			settings.saveSettings(new Settings("ABC College","New Delhi"));
		}
	}
	
	public Users findUser(String userid) {
		return repo.getById(userid);
	}
	
	public void deleteUser(int cid) {
		Users user=findByCid(cid);
		repo.delete(user);
	}
	
	public void AddUser(Users user) {
		repo.save(user);
	}
	
	public Users findByCid(int cid) {
		return repo.findByCid(cid);
	}
	
	public void ChangePwd(Users user) {
		Users u=repo.findById(user.getUserid()).get();
		u.setPwd(user.getPwd());
		repo.save(user);
	}
	
	public void updateUser(Users user) {
		repo.save(user);
	}
	
	public Users validate(String userid,String pwd) {
		Optional<Users> uinfo=repo.findById(userid);
		if(uinfo.isPresent() && uinfo.get().getPwd().equals(pwd) && uinfo.get().isActive() ) {
			return uinfo.get();
		}			
		return null;
	}
	
	public Users verify(String userid) {
		Optional<Users> uinfo=repo.findById(userid);
		if(uinfo.isPresent()) {
			return uinfo.get();
		}			
		return null;
	}
	
	public List<Users> getAllUsers(){
		return repo.findAll(Sort.by(Direction.DESC, "createdon"));
	}
}
