package com.example.tpalbackend.payload.request.blog;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class BlogCreateRequest {
    @NotBlank
    private String title;
    @NotBlank
    private String description;
}
