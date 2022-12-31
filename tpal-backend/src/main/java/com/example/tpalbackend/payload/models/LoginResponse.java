package com.example.tpalbackend.payload.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.servlet.http.Cookie;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String accessToken;

    private Cookie refreshToken;

    private String type = "Bearer";

    public LoginResponse(String accessToken, Cookie refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
