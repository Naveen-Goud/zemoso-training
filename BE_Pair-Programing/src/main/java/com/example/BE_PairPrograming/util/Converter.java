package com.example.BE_PairPrograming.util;

import com.example.BE_PairPrograming.dto.EmployeeDto;
import com.example.BE_PairPrograming.entity.Employee;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class Converter {

    @Autowired
    private ModelMapper modelMapper;

    public Employee EmployeeDtoToEntity(EmployeeDto newEmployee){
        Employee employee=modelMapper.map(newEmployee,Employee.class);
        return employee;
    }

    public  EmployeeDto ConvertEntityToDto(Optional<Employee> employee){
        EmployeeDto employeeDto=modelMapper.map(employee,EmployeeDto.class);
        return employeeDto;
    }
}
