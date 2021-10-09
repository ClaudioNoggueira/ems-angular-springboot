package com.claudionogueira.sms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudionogueira.sms.entities.Empregado;

@Repository // EmployeeRepository
public interface EmpregadoRepository extends JpaRepository<Empregado, Integer> {

}
