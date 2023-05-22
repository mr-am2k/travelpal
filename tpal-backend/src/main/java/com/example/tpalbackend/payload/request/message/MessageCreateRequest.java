package com.example.tpalbackend.payload.request.message;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageCreateRequest {
    @NotNull
    private UUID senderId;

    @NotNull
    private UUID receiverId;

    @NotNull
    private String message;

    @NotNull
    LocalDateTime created;
}
