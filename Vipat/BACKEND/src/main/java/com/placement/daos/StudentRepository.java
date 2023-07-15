package com.placement.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
