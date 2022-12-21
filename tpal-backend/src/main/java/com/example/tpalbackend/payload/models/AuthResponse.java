package com.example.tpalbackend.payload.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;

    private String type = "Bearer";

    private UUID id;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String country;

    private LocalDate dateOfBirth;

    private String gender;

    private Float rating;

    private String imageUrl;

    private List<String> roles;

    public AuthResponse(
            String token,
            UUID id,
            String firstName,
            String lastName,
            String username,
            String email,
            String country,
            LocalDate dateOfBirth,
            String gender,
            Float rating,
            String imageUrl,
            List<String> roles
    ) {
        this.token = token;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.country = country;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.roles = roles;
    }

    /*public AuthResponse(String accessToken, UUID id, String email, String username, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.email = email;
        this.username = username;
        this.roles = roles;
    }*/
}
