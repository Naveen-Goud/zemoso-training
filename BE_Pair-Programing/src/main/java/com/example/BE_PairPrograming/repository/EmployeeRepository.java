package com.example.BE_PairPrograming.repository;

import com.example.BE_PairPrograming.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
