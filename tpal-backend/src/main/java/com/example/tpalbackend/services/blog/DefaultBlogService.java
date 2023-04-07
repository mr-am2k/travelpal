package com.example.tpalbackend.services.blog;


import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;
import com.example.tpalbackend.repositories.blog.BlogJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DefaultBlogService implements BlogService{
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
        if(appUser == null) throw new UserNotFoundByIdException("User not found.");
        var createdBlog = new BlogEntity(blog.getTitle(),blog.getDescription(),appUser);
        return this.blogRepository.save(createdBlog);
    }
    @Override
    public BlogEntity findSingle(UUID blogID) {
        return this.blogRepository.findById(blogID).get();
    }
}
