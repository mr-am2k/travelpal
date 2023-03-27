package com.example.tpalbackend;

import com.example.tpalbackend.repositories.blog.BlogJpaRepository;
import com.example.tpalbackend.repositories.post.PostJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.services.blog.BlogService;
import com.example.tpalbackend.services.blog.DefaultBlogService;
import com.example.tpalbackend.services.post.DefaultPostService;
import com.example.tpalbackend.services.post.PostService;
import org.junit.jupiter.api.BeforeAll;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PostTest {
    @Autowired

    static PostService postService;
    static UserJpaRepository userRepository;
    static PostJpaRepository postRepository;
    @BeforeAll
    static void beforeMethod(){
        postRepository = Mockito.mock(PostJpaRepository.class);
        userRepository = Mockito.mock(UserJpaRepository.class);
        postService = new DefaultPostService(postRepository,userRepository);
    }

}
