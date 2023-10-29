package com.example.BE_PairPrograming.service;

import com.example.BE_PairPrograming.dto.EmployeeDto;
import com.example.BE_PairPrograming.dto.ResponseEmployeeDto;

public interface EmployeeService {

    ResponseEmployeeDto addEmployee(EmployeeDto newEmployee);

    ResponseEmployeeDto getDetailsById(int id);

    String deleteEmployeeById(int id);
}
