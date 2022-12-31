package com.example.tpalbackend.services.user;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.payload.request.user.UserLoginRequest;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.request.user.UserRegisterRequest;

public interface UserService {
    AuthResponse login(UserLoginRequest userLoginRequest);

    UserEntity register(UserRegisterRequest userRegisterRequest);
}
