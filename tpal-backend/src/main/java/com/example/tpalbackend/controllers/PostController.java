package com.example.tpalbackend.controllers;

import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.post.DefaultPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/post")
public class PostController {
    private final DefaultPostService postService;
    @PostMapping
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
    public ResponseEntity<?> GetAll(){
        var response = new GlobalResponse();

        response.setData(Optional.ofNullable(this.postService.getAll()));

        return ResponseEntity.ok().body(response);
    }
    @GetMapping("/{id}")
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
