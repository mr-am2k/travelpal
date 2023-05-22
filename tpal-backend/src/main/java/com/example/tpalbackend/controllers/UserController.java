package com.example.tpalbackend.controllers;

import java.net.URI;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.models.User;
import com.example.tpalbackend.payload.request.user.UserUpdateRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.user.UserService;
import com.example.tpalbackend.utils.RequestUtils;
import com.example.tpalbackend.utils.secuirty.jwt.JwtUtils;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@Tag(name = "User")
public class UserController {
    private final UserService userService;

    private final JwtUtils jwtUtils;

    public UserController(UserService userService, JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    @GetMapping("/user")
    public User getUser(HttpServletRequest request) {
        String token = RequestUtils.getToken(request, RequestUtils.AUTHORIZATION_HEADER, RequestUtils.BEARER);
        String username = jwtUtils.getUserNameFromJwtToken(token, true);
        return userService.getUser(username);
    }

    @PutMapping
    public ResponseEntity<GlobalResponse> updateUser(@RequestBody UserUpdateRequest req) throws ApiException {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/users").toUriString());

        var response = new GlobalResponse();

        try {
            response.setItem(Optional.ofNullable(this.userService.updateUser(req)));
            return ResponseEntity.created(uri).body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }
}
