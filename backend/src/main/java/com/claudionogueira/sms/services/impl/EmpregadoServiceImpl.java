package com.claudionogueira.sms.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudionogueira.sms.entities.Empregado;
import com.claudionogueira.sms.exceptions.ResourceNotFoundException;
import com.claudionogueira.sms.repositories.EmpregadoRepository;
import com.claudionogueira.sms.services.EmpregadoService;

@Service
public class EmpregadoServiceImpl implements EmpregadoService {

	@Autowired
	private EmpregadoRepository repo;

	// get all employees
	@Override
	public List<Empregado> listarTodos() {
		return repo.findAll();
	}

	@Override
	public void adicionarEmpregado(Empregado obj) {
		repo.save(obj);
	}

	@Override
	public Empregado pesquisarEmpregadoPorId(Integer id) {
		return repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Empregado com id '" + id + "' não existe"));
	}

}
