package com.example.tpalbackend.controllers;

import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.post.DefaultPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/post")
public class PostController {
    private final DefaultPostService _postService;
    @PostMapping
    public ResponseEntity<?> Post(@Valid @RequestBody PostCreateRequest post){
        var response = new GlobalResponse();
        try{
            response.setItem(Optional.ofNullable(this._postService.createPost(post)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }
}
