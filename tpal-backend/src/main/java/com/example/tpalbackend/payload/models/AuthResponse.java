package com.example.tpalbackend.payload.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String accessToken;


    private String type = "Bearer";

    public AuthResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
