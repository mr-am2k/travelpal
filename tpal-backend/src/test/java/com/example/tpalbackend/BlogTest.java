package com.example.tpalbackend;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.entities.UserEntity;
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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
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
    void mockAuthentication(){
        Authentication authentication = Mockito.mock(Authentication.class);
        SecurityContext securityContext = Mockito.mock(SecurityContext.class);
        UserEntity entity = Mockito.mock(UserEntity.class);
        Mockito.when(securityContext.getAuthentication()).thenReturn(authentication);
        Mockito.when(securityContext.getAuthentication().getName()).thenReturn("mahir");
        Mockito.when(userRepository.findByUsername("mahir")).thenReturn(entity);
        SecurityContextHolder.setContext(securityContext);
    }
    @DisplayName("Blog creation success test")
    @Test
    void createNewBlog(){
        BlogCreateRequest newRequest = new BlogCreateRequest();
        newRequest.setTitle("new title!");
        newRequest.setDescription("new description!");
        var createdBlog = new BlogEntity(UUID.randomUUID(),"new title!","new description!",null,null);
        mockAuthentication();
        Mockito.when(blogService.create(newRequest)).thenReturn(createdBlog);
        var createdBlogResponse = blogService.create(newRequest);
        Assertions.assertThat(createdBlogResponse).as("Check all fields")
                .usingRecursiveComparison().ignoringFields("user","comments","id").isEqualTo(createdBlog);
    }
    @DisplayName("Blog user not found exception test")
    @Test
    void createBlogFail(){
        BlogCreateRequest newRequest = new BlogCreateRequest();
        newRequest.setTitle("new title!");
        newRequest.setDescription("new description!");
        var createdBlog = new BlogEntity("new title!","new description!",null);
        assertThrows(UserNotFoundByIdException.class, () -> {
            blogService.create(newRequest);
        });
    }
}
