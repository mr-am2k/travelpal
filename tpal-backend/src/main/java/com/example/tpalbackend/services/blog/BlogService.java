package com.example.tpalbackend.services.blog;

import java.util.List;
import java.util.UUID;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;
import com.example.tpalbackend.payload.request.blog.BlogUpdateRequest;

public interface BlogService {
    List<BlogEntity> getAll();

    BlogEntity create(BlogCreateRequest blog);

    BlogEntity findSingle(UUID blogID);

    BlogEntity updateBlog(BlogUpdateRequest request) throws ApiException;
}
