package com.placement;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.placement.services.UsersService;
import com.placement.utils.FileUploadProperties;

@SpringBootApplication
@EnableConfigurationProperties({
    FileUploadProperties.class
})
@EnableJpaAuditing
public class PlacementBackendApplication {
	
	private static final Logger log = LoggerFactory.getLogger(PlacementBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PlacementBackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(UsersService srv) {
	    return (args) -> {
    		srv.createAdmin();
    		log.info("Admin user created successfully");
	    };
	}

}
