package com.example.tpalbackend.service.message;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.tpalbackend.entities.MessageEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.message.MessageCreateRequest;
import com.example.tpalbackend.payload.request.message.MessageGetForSingleRequest;
import com.example.tpalbackend.payload.request.message.MessageGetRequest;

@Service
public interface MessageService {
    MessageEntity saveMessage(MessageCreateRequest message) throws ApiException;

    List<MessageEntity> getMessages(MessageGetRequest request) throws ApiException;

    List<MessageEntity> getMessagesForUser(MessageGetForSingleRequest request) throws ApiException;
}
