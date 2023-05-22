package com.example.tpalbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.example.tpalbackend.payload.models.Message;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simMessagingTemplate;

    @MessageMapping("/message") // app/message
    @SendTo("/chatroom/public")
    public Message receivePublicMessage(@Payload Message message) {
        return message;
    }

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message) {
        simMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "/private", message); // /user/userName/private
        return message;
    }
}
