package com.claudionogueira.sms;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.claudionogueira.sms.entities.Empregado;
import com.claudionogueira.sms.repositories.EmpregadoRepository;

@SpringBootApplication
public class AngularEmsBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(AngularEmsBackendApplication.class, args);
	}

	@Autowired
	private EmpregadoRepository repo;

	@Override
	public void run(String... args) throws Exception {
		Empregado emp1 = new Empregado(1, "Claudio", "Nogueira", "cllaudionoggueira@gmail.com");
		Empregado emp2 = new Empregado(2, "Maria", "Silva", "mariasilva@gmail.com");
		Empregado emp3 = new Empregado(3, "Ana", "Santos", "anasantos@gmail.com");
		Empregado emp4 = new Empregado(4, "José", "Carvalho", "josecarvalho@gmail.com");

		repo.saveAll(Arrays.asList(emp1, emp2, emp3, emp4));
	}
}
