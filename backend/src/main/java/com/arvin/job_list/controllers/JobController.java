package com.arvin.job_list.controllers;

import com.arvin.job_list.dao.JobRepository;
import com.arvin.job_list.entities.Job;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class JobController {

    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping("/jobs")
    public List<Job> getAllJobs() {  // ✅ Returns a normal JSON array
        return jobRepository.findAll();
    }

    @PostMapping("/jobs")
    public Job newJob(@RequestBody Job job){
        return jobRepository.save(job);
    }

    @GetMapping("/jobs/{id}")
    public Job getJobById(@PathVariable Long id){
        return jobRepository.findById(id).orElseGet(null);
    }

    @PutMapping("/jobs/{id}")
    public Job updateJobById(@RequestBody Job job, @PathVariable Long id){
        return jobRepository.findById(id).map(j ->{
            j.setCompany(job.getCompany());
            j.setTitle(job.getTitle());
            j.setDescription(job.getDescription());
            j.setLocation(job.getLocation());
            return jobRepository.save(j);
        }).orElseGet(() -> jobRepository.save(job));
    }

    @DeleteMapping("/jobs/{id}")
    void deleteEmployee(@PathVariable Long id) {
        jobRepository.deleteById(id);
    }

}
