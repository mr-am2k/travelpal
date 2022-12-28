package com.example.tpalbackend.services.post;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;

import java.util.List;
import java.util.UUID;

public interface PostService {
    PostEntity createPost(PostCreateRequest post);
    List<PostEntity> getAll();
    PostEntity getSingle(UUID id);
}
