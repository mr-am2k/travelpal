package com.example.tpalbackend.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.message.MessageGetForSingleRequest;
import com.example.tpalbackend.payload.request.message.MessageGetRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.service.message.MessageService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/message")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
public class MessageController {
    private final MessageService messageService;

    @PostMapping(value = "for-user")
    public ResponseEntity<GlobalResponse> getForUser(@RequestBody MessageGetForSingleRequest req) throws ApiException {
        var response = new GlobalResponse();

        try {
            response.setData(Optional.ofNullable(this.messageService.getMessagesForUser(req)));
            return ResponseEntity.ok().body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping(value = "for-chat")
    public ResponseEntity<GlobalResponse> getForChat(@RequestBody MessageGetRequest req) throws ApiException {
        var response = new GlobalResponse();

        try {
            response.setData(Optional.ofNullable(this.messageService.getMessages(req)));
            return ResponseEntity.ok().body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }
}
