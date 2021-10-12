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

	// add employee
	@Override
	public void adicionarEmpregado(Empregado obj) {
		repo.save(obj);
	}

	// find employee by id
	@Override
	public Empregado pesquisarEmpregadoPorId(Integer id) {
		return repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Empregado com id '" + id + "' não encontrado"));
	}

	// update employee
	@Override
	public void atualizarEmpregado(Empregado obj, Integer id) {
		Empregado attObj = this.pesquisarEmpregadoPorId(id);
		attObj.setNome(obj.getNome());
		attObj.setSobrenome(obj.getSobrenome());
		attObj.setEmail(obj.getEmail());
		repo.save(attObj);
	}

	@Override
	public void excluirEmpregado(Integer id) {
		Empregado entity = this.pesquisarEmpregadoPorId(id);
		repo.delete(entity);
	}
}
