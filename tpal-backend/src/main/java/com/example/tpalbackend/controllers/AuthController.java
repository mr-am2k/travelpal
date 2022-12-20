package com.example.tpalbackend.controllers;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.request.UserLoginRequest;
import com.example.tpalbackend.payload.request.UserRegisterRequest;
import com.example.tpalbackend.services.user.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
@Tag(name = "Auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody UserLoginRequest loginRequest) {
        return userService.login(loginRequest);
    }

    @PostMapping("/register")
    public UserEntity register(@RequestBody UserRegisterRequest registerRequest) {
        return userService.register(registerRequest);
    }
}
