package com.example.tpalbackend.middleware.exceptions;

public class UserNotFoundByUsernameException extends RuntimeException {
    public UserNotFoundByUsernameException(String message) {
        super(message);
    }
}
