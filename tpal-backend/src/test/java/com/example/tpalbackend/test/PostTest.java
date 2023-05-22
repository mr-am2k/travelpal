package com.example.tpalbackend.test;

import static org.junit.jupiter.api.Assertions.assertThrows;

import java.time.LocalDateTime;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.repositories.post.PostJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.services.post.DefaultPostService;
import com.example.tpalbackend.services.post.PostService;
import com.example.tpalbackend.utils.HelperMock;
import com.example.tpalbackend.utils.UserGender;

@SpringBootTest
public class PostTest {
    @Autowired

    static PostService postService;
    static UserJpaRepository userRepository;
    static PostJpaRepository postRepository;

    @BeforeAll
    static void beforeMethod() {
        postRepository = Mockito.mock(PostJpaRepository.class);
        userRepository = Mockito.mock(UserJpaRepository.class);
        postService = new DefaultPostService(postRepository, userRepository);
    }

    @DisplayName("Create new post test")
    @Test
    void createNewPost() {
        PostCreateRequest newRequest = new PostCreateRequest();
        newRequest.setTitle("new title!");
        newRequest.setDescription("new description!");
        newRequest.setPlaceOfDeparture("Bosnia and Herzegovina");
        newRequest.setDescription("Spain");
        newRequest.setDepartureDate(LocalDateTime.now().toLocalDate());
        newRequest.setReturnDate(LocalDateTime.now().toLocalDate());
        var createdPost = new PostEntity("new title!", "new description!", "Bosnia and Herzegovina", "Spain",
                LocalDateTime.now().toLocalDate(), LocalDateTime.now().toLocalDate(), 1, 100, List.of("English"), List.of(UserGender.MALE),
                null);
        HelperMock.mockAuthentication(userRepository);
        Mockito.when(postService.createPost(newRequest)).thenReturn(createdPost);
        var createdPostResponse = postService.createPost(newRequest);
        Assertions.assertThat(createdPostResponse).as("Check all fields").usingRecursiveComparison()
                .ignoringFields("user", "comments", "id").isEqualTo(createdPost);
    }

    @DisplayName("Post create exception test")
    @Test
    void createPost() {
        PostCreateRequest newRequest = new PostCreateRequest();
        newRequest.setTitle("new title!");
        newRequest.setDescription("new description!");
        newRequest.setPlaceOfDeparture("Bosnia and Herzegovina");
        newRequest.setDescription("Spain");
        assertThrows(UserNotFoundByIdException.class, () -> {
            postService.createPost(newRequest);
        });
    }

    @DisplayName("Get post by id exception test")
    @Test
    void getSingleException() {
        assertThrows(NullPointerException.class, () -> {
            postService.getSingle(null);
        });
    }
}