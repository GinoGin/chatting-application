package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Person;

public interface PersonService {
	
	public boolean registerPerson(Person person);
	public boolean validatePerson(int id,String pass);
	
	public List<Person> getPersonList(); 

}
