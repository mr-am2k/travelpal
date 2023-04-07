package com.example.tpalbackend.services.comment;

import com.example.tpalbackend.entities.CommentEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.comment.CommentCreateRequest;
import com.example.tpalbackend.payload.response.CommentResponse;

import java.util.List;
import java.util.UUID;

public interface CommentService {

    CommentResponse createComment(CommentCreateRequest request);

    List<CommentEntity> getCommentsForBlog(UUID blogID);

    List<CommentEntity> getCommentsOfUser(String username) throws Exception;

}
