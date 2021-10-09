package com.claudionogueira.sms.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.claudionogueira.sms.entities.Empregado;
import com.claudionogueira.sms.services.EmpregadoService;

@RestController
public class EmpregadoController {

	@Autowired
	private EmpregadoService service;

	// get all employees
	@GetMapping("/empregados")
	public List<Empregado> listarEmpregados() {
		return service.listarTodos();
	}
}
