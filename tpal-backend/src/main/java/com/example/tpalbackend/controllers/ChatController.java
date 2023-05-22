package com.example.tpalbackend.controllers;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.models.Message;
import com.example.tpalbackend.payload.request.message.MessageCreateRequest;
import com.example.tpalbackend.service.message.MessageService;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simMessagingTemplate;
    @Autowired
    private MessageService messageService;

    @MessageMapping("/message") // app/message
    @SendTo("/chatroom/public")
    public Message receivePublicMessage(@Payload Message message) {
        return message;
    }

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message) throws ApiException {
        var newMessage = new MessageCreateRequest(message.getSenderId(), message.getReceiverId(), message.getMessageContent(),
                LocalDateTime.now());
        this.messageService.saveMessage(newMessage);
        simMessagingTemplate.convertAndSendToUser(message.getReceiverId().toString(), "/private", message); // /user/userId/private
        return message;
    }
}
