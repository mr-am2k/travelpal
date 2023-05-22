package com.example.tpalbackend.services.blog;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;
import com.example.tpalbackend.payload.request.blog.BlogUpdateRequest;
import com.example.tpalbackend.repositories.blog.BlogJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DefaultBlogService implements BlogService {
    private final BlogJpaRepository blogRepository;
    private final UserJpaRepository userRepository;

    @Override
    public List<BlogEntity> getAll() {
        return this.blogRepository.findAll();
    }

    @Override
    public BlogEntity create(BlogCreateRequest blog) {
        String auth = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity appUser = this.userRepository.findByUsername(auth);
        if (appUser == null) {
            throw new UserNotFoundByIdException("User not found.");
        }
        var createdBlog = new BlogEntity(blog.getTitle(), blog.getDescription(), appUser);
        return this.blogRepository.save(createdBlog);
    }

    @Override
    public BlogEntity findSingle(UUID blogID) {
        return this.blogRepository.findById(blogID).get();
    }

    @Override
    public BlogEntity updateBlog(BlogUpdateRequest request) throws ApiException {
        var blogToUpdate = this.blogRepository.findById(request.getId());
        if (!blogToUpdate.isEmpty()) {
            blogToUpdate.get().setDescription(request.getDescription());
            blogToUpdate.get().setTitle(request.getTitle());
            return this.blogRepository.save(blogToUpdate.get());
        }
        throw new ApiException("Blog not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());
    }
}
