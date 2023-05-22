package com.example.tpalbackend.services.post;

import java.util.UUID;

import org.springframework.data.domain.Page;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.request.post.PostSearchRequest;
import com.example.tpalbackend.payload.request.post.PostUpdateRequest;

public interface PostService {
    PostEntity createPost(PostCreateRequest post);

    Page<PostEntity> getPosts(PostSearchRequest postSearchRequest);

    PostEntity getSingle(UUID id);

    PostEntity updatePost(PostUpdateRequest req) throws ApiException;
}
