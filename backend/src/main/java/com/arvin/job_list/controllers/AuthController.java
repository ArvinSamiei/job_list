package com.arvin.job_list.controllers;

import com.arvin.job_list.services.AuthService;
import jakarta.annotation.security.PermitAll;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PermitAll
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request) {
        String token = authService.registerUser(request.get("email"), request.get("username"), request.get("password"));
        return ResponseEntity.ok(Map.of("token", token));
    }

    @PermitAll
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String token = authService.loginUser(request.get("email"), request.get("password"));
        return ResponseEntity.ok(Map.of("token", token));
    }
}
