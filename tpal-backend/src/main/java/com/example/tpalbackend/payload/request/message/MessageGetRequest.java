package com.example.tpalbackend.payload.request.message;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class MessageGetRequest {
    @NotNull
    private UUID senderId;

    @NotNull
    private UUID receiverId;

}
