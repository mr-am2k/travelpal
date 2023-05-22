package com.example.tpalbackend.payload.request.user;

import java.time.LocalDate;
import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class UserUpdateRequest {
    @NotNull
    private UUID id;
    @NotNull
    private String firstName;
    private String lastName;
    private String email;
    private String country;
    private LocalDate dateOfBirth;
    private String gender;
    private String imageUrl;
}
