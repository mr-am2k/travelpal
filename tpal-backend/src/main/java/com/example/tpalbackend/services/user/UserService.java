package com.example.tpalbackend.services.user;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.payload.request.UserLoginRequest;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.request.UserRegisterRequest;

public interface UserService {
    AuthResponse login(UserLoginRequest userLoginRequest);

    UserEntity register(UserRegisterRequest userRegisterRequest);
}
