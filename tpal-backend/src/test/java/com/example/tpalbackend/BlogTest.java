package com.example.tpalbackend;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;
import com.example.tpalbackend.repositories.blog.BlogJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.services.blog.BlogService;
import com.example.tpalbackend.services.blog.DefaultBlogService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BlogTest {
    @Autowired

    static BlogService blogService;
    static BlogJpaRepository blogRepository;
    static UserJpaRepository userRepository;
    @BeforeAll
    static void beforeMethod(){
        blogRepository = Mockito.mock(BlogJpaRepository.class);
        userRepository = Mockito.mock(UserJpaRepository.class);
        blogService = new DefaultBlogService(blogRepository,userRepository);
    }

    @DisplayName("Blog creation")
    @Test
    void createNewBlog(){
        BlogCreateRequest newRequest = new BlogCreateRequest();
        newRequest.setTitle("new title!");
        newRequest.setDescription("new description!");
        var createdBlog = new BlogEntity(UUID.randomUUID(),"new title!","new description!",null,null);
        Mockito.when(blogService.create(newRequest)).thenReturn(createdBlog);

        var createdBlogResponse = blogService.create(newRequest);
        Assertions.assertThat(createdBlogResponse).as("Check all fields")
                .usingRecursiveComparison().ignoringFields("user","comments","id").isEqualTo(createdBlog);
    }
    @DisplayName("Blog creation exception throw")
    @Test
    void createBlogFail(){
        BlogCreateRequest newRequest = new BlogCreateRequest();
        newRequest.setTitle("new title!");
        newRequest.setDescription("new description!");
        var createdBlog = new BlogEntity("new title!","new description!",null);
        Mockito.when(blogRepository.save(createdBlog)).thenReturn(null);
        Mockito.when(userRepository.findByUsername(null)).thenReturn(null);
        Mockito.when(SecurityContextHolder.getContext().getAuthentication()).thenReturn(null);
        UserNotFoundByIdException exception = assertThrows(UserNotFoundByIdException.class,()->blogService.create(newRequest));
        assertEquals(exception.getMessage(),"User not found.");
    }
}
