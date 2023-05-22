package com.example.tpalbackend.controllers;

import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.request.post.PostSearchRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.post.DefaultPostService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/post")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@Tag(name = "Post")
public class PostController {
    private final DefaultPostService postService;
    @PostMapping
    @SecurityRequirement(name = "Bearer Authentication")
    public ResponseEntity<?> Post(@Valid @RequestBody PostCreateRequest post){
        var response = new GlobalResponse();

        try{
            response.setItem(Optional.ofNullable(this.postService.createPost(post)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }
    @GetMapping
    @SecurityRequirement(name = "Bearer Authentication")
    public ResponseEntity<?> getPosts(@ModelAttribute PostSearchRequest postSearchRequest){
        var response = new GlobalResponse();

        response.setData(Optional.ofNullable(Collections.singletonList(this.postService.getPosts(postSearchRequest))));

        return ResponseEntity.ok().body(response);
    }
    @GetMapping("/{id}")
    @SecurityRequirement(name = "Bearer Authentication")
    public ResponseEntity<?> GetSingle(@PathVariable UUID id){
        var response = new GlobalResponse();

        try{
            response.setItem(Optional.ofNullable(this.postService.getSingle(id)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            return ResponseEntity.notFound().build();
        }
    }
 }
