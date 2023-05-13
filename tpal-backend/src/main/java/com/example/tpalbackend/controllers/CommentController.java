package com.example.tpalbackend.controllers;

import com.example.tpalbackend.payload.request.comment.CommentCreateRequest;
import com.example.tpalbackend.payload.request.comment.CommentUpdateRequest;
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
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
public class CommentController {
    private final CommentService commentService;
    @PostMapping
    public ResponseEntity<?> Post(@Valid @RequestBody CommentCreateRequest request){
        var response = new GlobalResponse();
        try{
            response.setItem(Optional.ofNullable(this.commentService.create(request)));
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
    @DeleteMapping
    @RequestMapping("/delete/{commentId}")
    public ResponseEntity<?> Delete(@PathVariable UUID commentId){
        var response = new GlobalResponse();
        try{
            response.setMessage("Comment deleted successfully".describeConstable());
            response.setItem(Optional.ofNullable(this.commentService.delete(commentId)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PutMapping
    @RequestMapping("/update/{commentId}")
    public ResponseEntity<?> Update(@PathVariable UUID commentId,@Valid @RequestBody CommentUpdateRequest req){
        var response = new GlobalResponse();
        try{
            response.setMessage("Comment updated successfully".describeConstable());
            response.setItem(Optional.ofNullable(this.commentService.update(commentId,req)));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }
}
