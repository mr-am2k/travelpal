package com.example.tpalbackend.controllers;

import java.net.URI;
import java.util.Optional;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;
import com.example.tpalbackend.payload.request.blog.BlogUpdateRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.blog.BlogService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/blog")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
public class BlogController {
    private final BlogService blogService;

    @GetMapping
    /* Pagination,filtering missing */
    public ResponseEntity<GlobalResponse> GetAll() {
        var response = new GlobalResponse();

        try {
            response.setData(Optional.ofNullable(this.blogService.getAll()));
            return ResponseEntity.ok().body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping
    @RequestMapping("/{blogId}")
    public ResponseEntity<GlobalResponse> getSingle(@PathVariable UUID blogId) {
        var response = new GlobalResponse();
        try {
            response.setItem(Optional.ofNullable(this.blogService.findSingle(blogId)));
            return ResponseEntity.ok().body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping
    public ResponseEntity<GlobalResponse> Post(@RequestBody BlogCreateRequest blog) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/blogs").toUriString());

        var response = new GlobalResponse();

        try {
            response.setItem(Optional.ofNullable(this.blogService.create(blog)));
            return ResponseEntity.created(uri).body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PutMapping
    public ResponseEntity<GlobalResponse> put(@RequestBody BlogUpdateRequest blog) throws ApiException {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/blogs").toUriString());

        var response = new GlobalResponse();

        try {
            response.setItem(Optional.ofNullable(this.blogService.updateBlog(blog)));
            return ResponseEntity.created(uri).body(response);
        } catch (Exception ex) {
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }
}
