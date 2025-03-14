package com.arvin.job_list.dao;

import com.arvin.job_list.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
