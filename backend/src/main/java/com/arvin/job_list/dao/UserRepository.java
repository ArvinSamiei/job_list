package com.arvin.job_list.dao;

import com.arvin.job_list.entities.JobListUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<JobListUser, Long> {
    Optional<JobListUser> findByEmail(String email);
    boolean existsByEmail(String email);
}
