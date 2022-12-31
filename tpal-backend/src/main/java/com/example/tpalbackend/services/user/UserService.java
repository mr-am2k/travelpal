package com.example.tpalbackend.services.user;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.payload.models.LoginResponse;
import com.example.tpalbackend.payload.request.user.UserLoginRequest;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.request.user.UserRegisterRequest;

import javax.servlet.http.HttpServletRequest;

public interface UserService {
    LoginResponse login(UserLoginRequest userLoginRequest);

    UserEntity register(UserRegisterRequest userRegisterRequest);

    AuthResponse refresh(HttpServletRequest request);
}
