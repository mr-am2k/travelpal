package com.example.tpalbackend.services.comment;

import com.example.tpalbackend.entities.CommentEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.comment.CommentCreateRequest;
import com.example.tpalbackend.payload.request.comment.CommentUpdateRequest;
import com.example.tpalbackend.payload.response.CommentResponse;

import java.util.List;
import java.util.UUID;

public interface CommentService {

    CommentResponse create(CommentCreateRequest request);

    List<CommentEntity> getCommentsForBlog(UUID blogID);

    List<CommentEntity> getCommentsOfUser(String username) throws Exception;

    CommentEntity delete(UUID commentId);

    CommentEntity update(UUID commentId, CommentUpdateRequest req);

}
