package com.example.tpalbackend.services.blog;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;

import java.util.List;
import java.util.UUID;

public interface BlogService {
    List<BlogEntity> getAll();
    BlogEntity create(BlogCreateRequest blog);

    BlogEntity findSingle(UUID blogID);
}
