package com.example.tpalbackend.services.post;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;

public interface PostService {
    PostEntity createPost(PostCreateRequest post);
}
