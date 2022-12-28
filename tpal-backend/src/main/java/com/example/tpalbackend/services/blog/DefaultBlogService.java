package com.example.tpalbackend.services.blog;


import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.BlogCreateRequest;
import com.example.tpalbackend.repositories.blog.BlogJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DefaultBlogService implements BlogService{
    private final BlogJpaRepository _blogRepository;
    private final UserJpaRepository _userRepository;
    @Override
    public List<BlogEntity> getAll() {
        return this._blogRepository.findAll();
    }

    @Override
    public BlogEntity create(BlogCreateRequest blog) {
        String auth = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity appUser = this._userRepository.findByUsername(auth);
        if(appUser == null) throw new UserNotFoundByIdException("User not found.");
        var createdBlog = new BlogEntity(blog.getTitle(),blog.getDescription(),appUser);
        return this._blogRepository.save(createdBlog);
    }
}
