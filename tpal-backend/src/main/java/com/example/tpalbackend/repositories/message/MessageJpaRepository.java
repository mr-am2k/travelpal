package com.example.tpalbackend.repositories.message;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.tpalbackend.entities.MessageEntity;
import com.example.tpalbackend.entities.UserEntity;

@Repository
public interface MessageJpaRepository extends JpaRepository<MessageEntity, UUID> {
    @Query("SELECT me from MessageEntity me WHERE me.sender = :sender and me.receiver = :receiver or me.sender = :receiver and me.receiver= :sender")
    List<MessageEntity> findMessagesByUsers(UserEntity sender, UserEntity receiver);

    @Query("SELECT me from MessageEntity me WHERE me.sender = :user or me.receiver = :user")
    List<MessageEntity> findMessagesForUser(UserEntity user);
}
