package com.example.tpalbackend.services.user;

import javax.servlet.http.HttpServletRequest;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.models.LoginResponse;
import com.example.tpalbackend.payload.models.User;
import com.example.tpalbackend.payload.request.user.UserLoginRequest;
import com.example.tpalbackend.payload.request.user.UserRegisterRequest;
import com.example.tpalbackend.payload.request.user.UserUpdateRequest;

public interface UserService {
    LoginResponse login(UserLoginRequest userLoginRequest);

    UserEntity register(UserRegisterRequest userRegisterRequest);

    AuthResponse refresh(HttpServletRequest request);

    User getUser(String username);

    UserEntity getUserEntity(String username);

    UserEntity updateUser(UserUpdateRequest req) throws ApiException;
}
