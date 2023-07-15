package com.placement.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.entity.Settings;

@Repository
public interface SettingsRepository extends JpaRepository<Settings, Integer> {

	
}
