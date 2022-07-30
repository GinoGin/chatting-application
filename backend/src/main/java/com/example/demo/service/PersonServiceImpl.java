package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Person;
import com.example.demo.repo.PersonRepo;

@Service
public class PersonServiceImpl implements PersonService{
	
	@Autowired
	private PersonRepo personRepo;

	@Override
	public boolean registerPerson(Person person) {
		try {
			personRepo.save(person);
		}
		catch(Exception e) {
			return false;
		}
		return true;
		
	}

	@Override
	public boolean validatePerson(int id, String pass) {
		
		List<Person> persons = personRepo.findAll();
		
		for(Person person : persons) {
			if(person.getPersonId()==id) {
				if(person.getPassword().equals(pass)) {
					System.out.println("login successfull");
					return true;
				}
			}
		}
		return false;
		
	}

	@Override
	public List<Person> getPersonList() {
		List<Person> al = new ArrayList<>();
		al=personRepo.findAll();
		return al;
	}
	
	
	
	

}
