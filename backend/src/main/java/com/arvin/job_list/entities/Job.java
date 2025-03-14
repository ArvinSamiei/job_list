package com.arvin.job_list.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "job")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long id;

    @JsonProperty("title")
    @Column(nullable = false)
    private String title;

    @JsonProperty("company")
    @Column(nullable = false)
    private String company;
    public String getCompany() {
        return company;
    }

    @JsonProperty("location")
    @Column(nullable = false)
    private String location;

    @JsonProperty("description")
    @Column(columnDefinition = "TEXT")
    private String description;
}
