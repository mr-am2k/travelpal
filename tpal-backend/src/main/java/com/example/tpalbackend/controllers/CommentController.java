package com.example.tpalbackend.controllers;

import com.example.tpalbackend.payload.request.comment.CommentCreateRequest;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.comment.CommentService;
import com.example.tpalbackend.services.post.DefaultPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comment")
public class CommentController {
    private final CommentService commentService;
    @PostMapping
    public ResponseEntity<?> Post(@Valid @RequestBody CommentCreateRequest request){
        var response = new GlobalResponse();
        try{
            response.setItem(Optional.ofNullable(this.commentService.createComment(request)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping
    @RequestMapping("/{blogId}")
    public ResponseEntity<?> GetCommentsForBlog(@PathVariable UUID blogId){
        var response = new GlobalResponse();
        try{
            response.setItem(Optional.ofNullable(this.commentService.getCommentsForBlog(blogId)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping
    @RequestMapping("/get-for-user/{username}")
    public ResponseEntity<?> GetCommentsForUser(@PathVariable String username){
        var response = new GlobalResponse();
        try{
            response.setItem(Optional.ofNullable(this.commentService.getCommentsOfUser(username)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

}
