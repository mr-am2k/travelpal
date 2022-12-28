package com.example.tpalbackend.services.post;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;

import java.util.List;

public interface PostService {
    PostEntity createPost(PostCreateRequest post);
    List<PostEntity> getAll();
}
