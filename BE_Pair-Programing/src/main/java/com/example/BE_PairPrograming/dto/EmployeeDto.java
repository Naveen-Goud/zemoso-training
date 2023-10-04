package com.example.BE_PairPrograming.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class EmployeeDto {
    private String empName;
    private String empType;
}
