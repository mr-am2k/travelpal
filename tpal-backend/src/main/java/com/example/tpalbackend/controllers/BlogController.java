package com.example.tpalbackend.controllers;
import com.example.tpalbackend.payload.request.blog.BlogCreateRequest;
import com.example.tpalbackend.payload.response.GlobalResponse;
import com.example.tpalbackend.services.blog.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/blog")
public class BlogController {
    private final BlogService _blogService;
    @GetMapping
    /*Pagination,filtering missing*/
    public ResponseEntity<GlobalResponse> GetAll(){
        var response = new GlobalResponse();
        try{
            response.setData(Optional.ofNullable(this._blogService.getAll()));
            return ResponseEntity.ok().body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping
    public ResponseEntity<GlobalResponse> Post(@RequestBody BlogCreateRequest blog){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/blogs").toUriString());
        var response = new GlobalResponse();
        try{
            response.setItem(Optional.ofNullable(this._blogService.create(blog)));
            return ResponseEntity.created(uri).body(response);
        }catch(Exception ex){
            response.setSuccess(false);
            response.setMessage(ex.getMessage().describeConstable());
            return ResponseEntity.badRequest().body(response);
        }

    }
}
