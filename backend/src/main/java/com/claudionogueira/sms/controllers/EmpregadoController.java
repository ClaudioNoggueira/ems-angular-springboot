package com.claudionogueira.sms.controllers;

import java.util.List;

import com.claudionogueira.sms.entities.Empregado;
import com.claudionogueira.sms.services.EmpregadoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public ResponseEntity<Void> adicionarEmpregado(@RequestBody Empregado obj) {
		service.adicionarEmpregado(obj);
		return ResponseEntity.noContent().build();
	}

	// find employee by id
	@GetMapping("/empregados/{id}")
	public ResponseEntity<Empregado> pesquisarEmpregadoPorId(@PathVariable Integer id) {
		return ResponseEntity.ok(service.pesquisarEmpregadoPorId(id));
	}

	// update employee
	@PutMapping("/empregados/{id}")
	public ResponseEntity<Void> atualizarEmpregado(@RequestBody Empregado obj, @PathVariable Integer id) {
		service.atualizarEmpregado(obj, id);
		return ResponseEntity.noContent().build();
	}
}
