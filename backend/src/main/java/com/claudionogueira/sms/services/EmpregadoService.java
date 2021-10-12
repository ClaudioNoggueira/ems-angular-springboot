package com.claudionogueira.sms.services;

import java.util.List;

import com.claudionogueira.sms.entities.Empregado;

public interface EmpregadoService {

	// get all employees
	List<Empregado> listarTodos();

	// create employee rest api
	void adicionarEmpregado(Empregado obj);
}
