package com.example.tpalbackend.payload.request.message;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class MessageGetForSingleRequest {
    @NotNull
    private UUID userId;
}
