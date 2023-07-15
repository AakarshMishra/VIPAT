package com.placement.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.entity.HOD;

@Repository
public interface HodRepository extends JpaRepository<HOD, Integer> {

}
