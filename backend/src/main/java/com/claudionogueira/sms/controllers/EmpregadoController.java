package com.claudionogueira.sms.controllers;

import java.util.List;

import com.claudionogueira.sms.entities.Empregado;
import com.claudionogueira.sms.services.EmpregadoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmpregadoController {

	@Autowired
	private EmpregadoService service;

	// get all employees
	@GetMapping("/empregados")
	public List<Empregado> listarEmpregados() {
		return service.listarTodos();
	}

	// create employee rest api
	@PostMapping("/empregados")
	public void adicionarEmpregado(@RequestBody Empregado obj) {
		service.adicionarEmpregado(obj);
	}

}
