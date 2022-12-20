package com.example.tpalbackend.payload.models;

import lombok.Data;

import java.util.UUID;

@Data
public class User {
    private UUID id;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String role;
}
