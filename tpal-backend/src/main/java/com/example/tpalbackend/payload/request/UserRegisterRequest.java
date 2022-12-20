package com.example.tpalbackend.payload.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UserRegisterRequest {
    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    private String username;

    @NotBlank
    private String email;

    @NotBlank
    private String role;

    @NotBlank
    private String password;
}
