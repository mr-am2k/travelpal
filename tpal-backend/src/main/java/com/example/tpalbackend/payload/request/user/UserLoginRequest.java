package com.example.tpalbackend.payload.request.user;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UserLoginRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
