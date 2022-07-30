package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Person;
import com.example.demo.repo.PersonRepo;
import com.example.demo.service.PersonService;


@RestController
@RequestMapping("/person")
@CrossOrigin(origins = "*")
public class PersonController {
	
	@Autowired
	private PersonService personService;

	@PostMapping("/register")
	public boolean register(@RequestBody Person person) {
		 System.out.println("Registered successfully");
			 return personService.registerPerson(person);
			
			
	}
	
	@PostMapping("/login")
	public Boolean login(@RequestBody Map<String, String> body) {
		int id=Integer.parseInt(body.get("personId"));
		String pass = body.get("password");
		boolean bool= personService.validatePerson(id, pass);
		if(bool) {
			System.out.println("logged in");
			return true;
		}
		System.out.println("not logged in");
		return false;
	}
	
	@GetMapping("/chat")
	public List<Person> getChatList() {
		return personService.getPersonList();
	}
	
	
}
