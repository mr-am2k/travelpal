package com.example.tpalbackend.middleware.exceptions;

import org.hibernate.PropertyValueException;
import org.hibernate.procedure.NoSuchParameterException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.util.NoSuchElementException;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice()
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(PropertyValueException.class)
    public ResponseEntity<Object> handleSqlIntegrityException(HttpServletRequest req, PropertyValueException ex) {
        String error = "Unable to submit post: " + ex.getMessage();
        return buildResponseEntity(new ErrorResponse(HttpStatus.BAD_REQUEST, error));
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Object> handleNoSuchElementException(HttpServletRequest req, NoSuchElementException ex) {
        String message = "The row for address is not existent: " + req.getRequestURI();
        return buildResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND, message));
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<Object> handleNullPointerException(HttpServletRequest req, NullPointerException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.BAD_REQUEST, ex.getMessage()));
    }

    @ExceptionHandler(NoSuchParameterException.class)
    public ResponseEntity<Object> handleNoSuchParameterException(HttpServletRequest req, NoSuchParameterException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.BAD_REQUEST, ex.getMessage()));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Object> handleIllegalArgumentException(HttpServletRequest req, IllegalArgumentException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.BAD_REQUEST, ex.getMessage()));
    }

    @ExceptionHandler(UserNotFoundByUsernameException.class)
    public ResponseEntity<Object> handleUserNotFoundByUsernameException(HttpServletRequest req, UserNotFoundByUsernameException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND, "There is no user with email: " + ex.getMessage()));
    }

    @ExceptionHandler(UserNotFoundByIdException.class)
    public ResponseEntity<Object> handleUserNotFoundByIdException(HttpServletRequest req, UserNotFoundByIdException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND, "There is no user with id: " + ex.getMessage()));
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<Object> handleUserAlreadyExistsException(HttpServletRequest req, UserAlreadyExistsException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND, "User already exists with email: " + ex.getMessage()));
    }

    @ExceptionHandler(EmailNotValidException.class)
    public ResponseEntity<Object> handleEmailNotValidException(HttpServletRequest req, EmailNotValidException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.BAD_REQUEST, "Entered email is not valid"));
    }

    @ExceptionHandler(PasswordNotValidException.class)
    public ResponseEntity<Object> handlePasswordNotValidException(HttpServletRequest req, PasswordNotValidException ex) {
        return buildResponseEntity(new ErrorResponse(HttpStatus.BAD_REQUEST, "Entered password is not valid"));
    }

    private ResponseEntity<Object> buildResponseEntity(ErrorResponse errorResponse) {
        return new ResponseEntity<Object>(errorResponse, errorResponse.getStatus());
    }
}