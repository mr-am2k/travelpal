package com.example.tpalbackend.payload.request.user;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

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

    @NotBlank
    private String country;

    @NotBlank
    private LocalDate dateOfBirth;

    @NotBlank
    private Integer gender;

    @NotBlank
    private Float rating;
}


