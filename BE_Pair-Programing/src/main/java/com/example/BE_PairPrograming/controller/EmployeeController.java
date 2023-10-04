package com.example.BE_PairPrograming.controller;

import com.example.BE_PairPrograming.dto.EmployeeDto;
import com.example.BE_PairPrograming.dto.ResponseEmployeeDto;
import com.example.BE_PairPrograming.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/newEmployee")
    public ResponseEmployeeDto postNewEmployee(@RequestBody EmployeeDto newEmployee){
        return employeeService.addEmployee(newEmployee);
    }

    @GetMapping("/{id}")
    public  ResponseEmployeeDto  getEmployeeDetails(@PathVariable int id){
        return  employeeService.getDetailsById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id){
        return  employeeService.deleteEmployeeById(id);
    }




}
