package com.arvin.job_list.services;

import com.arvin.job_list.dao.UserRepository;
import com.arvin.job_list.entities.JobListUser;
import com.arvin.job_list.security.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);


    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public String registerUser(String email, String username, String password) {
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already in use");
        }

        JobListUser user = new JobListUser();
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        logger.debug(username);
        userRepository.save(user);

        return jwtUtil.generateToken(user.getEmail());
    }

    public String loginUser(String email, String password) {
        Optional<JobListUser> user = userRepository.findByEmail(email);
        System.out.println(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return jwtUtil.generateToken(user.get().getEmail());
        }
        throw new RuntimeException("Invalid credentials");
    }
}
