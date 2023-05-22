package com.example.tpalbackend.entities;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "messages")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MessageEntity implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private LocalDateTime created;
    @ManyToOne
    private UserEntity sender;
    @ManyToOne
    private UserEntity receiver;
    private String message;

    public MessageEntity(UserEntity sender, UserEntity receiver, String message) {
        this.sender = sender;
        this.receiver = receiver;
        this.message = message;
    }
}
