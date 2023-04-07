package com.example.tpalbackend.repositories.comment;

import com.example.tpalbackend.entities.CommentEntity;
import com.example.tpalbackend.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface CommentJpaRepository extends JpaRepository<CommentEntity, UUID> {

    @Query("SELECT ce from CommentEntity ce WHERE ce.user = :user")
    List<CommentEntity> findCommentsByUser(UserEntity user);

    void deleteById(UUID id);
}
