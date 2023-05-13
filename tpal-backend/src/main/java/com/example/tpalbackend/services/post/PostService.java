package com.example.tpalbackend.services.post;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.request.post.PostSearchRequest;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface PostService {
    PostEntity createPost(PostCreateRequest post);
    Page<PostEntity> getPosts(PostSearchRequest postSearchRequest);
    PostEntity getSingle(UUID id);
}
