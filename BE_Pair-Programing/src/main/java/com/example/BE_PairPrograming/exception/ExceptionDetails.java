package com.example.BE_PairPrograming.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionDetails {
    private Date timeStamp;
    private String message;
    private HttpStatus status;
}
