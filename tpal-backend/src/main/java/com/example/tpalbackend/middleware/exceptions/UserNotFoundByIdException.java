package com.example.tpalbackend.middleware.exceptions;

public class UserNotFoundByIdException extends RuntimeException {
    public UserNotFoundByIdException(String message) {
        super(message);
    }
}
