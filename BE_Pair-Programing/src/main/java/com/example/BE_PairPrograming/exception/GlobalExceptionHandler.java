package com.example.BE_PairPrograming.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler  {

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ExceptionDetails> handleNotFoundException(NotFoundException exception){
        ExceptionDetails details=new ExceptionDetails();
        details.setMessage(exception.getMessage());
        details.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        details.setTimeStamp(new Date());
        return new ResponseEntity(details, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
