package com.example.BE_PairPrograming.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseEmployeeDto {
    private int empId;
    private String empName;
    private String empType;
}
