package com.example.tpalbackend.services.blog;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;

import java.util.List;

public interface BlogService {
    List<BlogEntity> getAll();
    BlogEntity create(BlogCreateRequest blog);
}
