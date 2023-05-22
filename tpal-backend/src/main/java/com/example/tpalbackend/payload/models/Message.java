package com.example.tpalbackend.payload.models;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Message {
    private UUID senderId;
    private UUID receiverId;
    private String messageContent;
    private String date;
    private Status status;
}
