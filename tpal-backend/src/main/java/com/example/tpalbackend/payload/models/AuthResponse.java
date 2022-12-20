package com.example.tpalbackend.payload.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;

    private String type = "Bearer";

    private UUID id;

    private String email;

    private String username;

    private List<String> roles;

    public AuthResponse(String accessToken, UUID id, String email, String username, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.email = email;
        this.username = username;
        this.roles = roles;
    }
}
