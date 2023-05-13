package com.example.tpalbackend.controllers;

import com.example.tpalbackend.payload.models.User;
import com.example.tpalbackend.services.user.UserService;
import com.example.tpalbackend.utils.RequestUtils;
import com.example.tpalbackend.utils.secuirty.jwt.JwtUtils;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

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
    public User getUser(HttpServletRequest request){
        String token = RequestUtils.getToken(request, RequestUtils.AUTHORIZATION_HEADER, RequestUtils.BEARER);
        String username = jwtUtils.getUserNameFromJwtToken(token, true);
        return userService.getUser(username);
    }
}
