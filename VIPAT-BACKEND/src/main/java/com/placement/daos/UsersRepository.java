package com.placement.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

	Users findByCid(int cid);
}
