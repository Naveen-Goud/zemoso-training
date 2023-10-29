package com.example.BE_PairPrograming.service;

import com.example.BE_PairPrograming.dto.EmployeeDto;
import com.example.BE_PairPrograming.dto.ResponseEmployeeDto;
import com.example.BE_PairPrograming.entity.Employee;
import com.example.BE_PairPrograming.exception.NotFoundException;
import com.example.BE_PairPrograming.repository.EmployeeRepository;
import com.example.BE_PairPrograming.util.Converter;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.Optional;

@Service
@Transactional
public class EmployeeServiceImpl implements  EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

    private Converter converter;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ResponseEmployeeDto addEmployee(EmployeeDto newEmployee) {
        Employee employee=  modelMapper.map(newEmployee,Employee.class);
       Employee savedEmployee= employeeRepository.save(employee);
       ResponseEmployeeDto employeeDto= modelMapper.map( savedEmployee, ResponseEmployeeDto.class);
        return  employeeDto;
    }

    @Override
    public ResponseEmployeeDto getDetailsById(int id) {
         Optional<Employee> employee= employeeRepository.findById(id);
        System.out.println(employee);
        if(employee!=null){
            ResponseEmployeeDto employeeDto= modelMapper.map(employee,ResponseEmployeeDto.class);
            return employeeDto;
        }else{
            throw new NotFoundException("Employee not found with the given id" + id);
        }
    }

    @Override
    public String deleteEmployeeById(int id) {
        Optional<Employee> employee=employeeRepository.findById(id);
        if(employee!=null){
            employeeRepository.deleteById(id);
            return  "employee deleted with id" +id;
        }else {
            throw new NotFoundException("Employee Not found with givrn id" + id);
        }
    }


}
