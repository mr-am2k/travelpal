package com.example.tpalbackend.entities;

import com.example.tpalbackend.payload.models.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="comments")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String comment;
    @ManyToOne
    @JsonIgnore
    private BlogEntity blog;
    @ManyToOne
    private UserEntity user;

    public CommentEntity(String comment, BlogEntity blog, UserEntity user){
        this.comment = comment;
        this.blog = blog;
        this.user = user;
    }
}
