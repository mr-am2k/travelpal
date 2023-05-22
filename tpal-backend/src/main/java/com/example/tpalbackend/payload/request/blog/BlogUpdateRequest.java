package com.example.tpalbackend.payload.request.blog;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class BlogUpdateRequest {
    @NotNull
    private UUID id;
    @NotNull
    private String title;
    @NotNull
    private String description;
}
