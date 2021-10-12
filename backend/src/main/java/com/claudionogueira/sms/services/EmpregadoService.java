package com.claudionogueira.sms.services;

import java.util.List;

import com.claudionogueira.sms.entities.Empregado;

public interface EmpregadoService {

	// get all employees
	List<Empregado> listarTodos();

	// create employee rest api
	void adicionarEmpregado(Empregado obj);

	// find employee by id
	Empregado pesquisarEmpregadoPorId(Integer id);

	// update employee
	void atualizarEmpregado(Empregado obj, Integer id);

	// delete employee
	void excluirEmpregado(Integer id);
}
