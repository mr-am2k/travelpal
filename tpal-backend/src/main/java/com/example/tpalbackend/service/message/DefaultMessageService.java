package com.example.tpalbackend.service.message;

import java.time.ZonedDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.tpalbackend.entities.MessageEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.message.MessageCreateRequest;
import com.example.tpalbackend.payload.request.message.MessageGetForSingleRequest;
import com.example.tpalbackend.payload.request.message.MessageGetRequest;
import com.example.tpalbackend.repositories.message.MessageJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DefaultMessageService implements MessageService {

    private final MessageJpaRepository messageRepository;
    private final UserJpaRepository userRepository;

    @Override
    public MessageEntity saveMessage(MessageCreateRequest message) throws ApiException {
        UserEntity sender = this.userRepository.findById(message.getSenderId()).get();
        if (sender == null) {
            throw new ApiException("Sender not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());
        }
        UserEntity receiver = this.userRepository.findById(message.getReceiverId()).get();
        if (receiver == null) {
            throw new ApiException("Receiver not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());

        }
        return this.messageRepository.save(new MessageEntity(sender, receiver, message.getMessage()));
    }

    @Override
    public List<MessageEntity> getMessages(MessageGetRequest request) throws ApiException {
        UserEntity sender = this.userRepository.findById(request.getSenderId()).get();
        if (sender == null) {
            throw new ApiException("Sender not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());
        }
        UserEntity receiver = this.userRepository.findById(request.getReceiverId()).get();
        if (receiver == null) {
            throw new ApiException("Receiver not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());

        }
        return this.messageRepository.findMessagesByUsers(sender, receiver);
    }

    @Override
    public List<MessageEntity> getMessagesForUser(MessageGetForSingleRequest request) throws ApiException {
        UserEntity user = this.userRepository.findById(request.getUserId()).get();
        if (user == null) {
            throw new ApiException("User not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());
        }
        return this.messageRepository.findMessagesForUser(user);
    }
}
