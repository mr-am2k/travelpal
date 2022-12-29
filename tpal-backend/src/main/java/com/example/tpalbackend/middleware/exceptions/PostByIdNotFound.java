package com.example.tpalbackend.middleware.exceptions;

public class PostByIdNotFound extends RuntimeException{
    public PostByIdNotFound(String message) {
        super(message);
    }
}
