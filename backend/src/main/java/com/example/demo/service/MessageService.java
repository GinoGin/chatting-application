package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entity.Message;
import com.example.demo.repo.MessageRepo;

@Service
public class MessageService {
	
	@Autowired
	private MessageRepo messageRepo;
	
	public boolean saveMessage(Message msg) {
		try {
			messageRepo.save(msg);
		}catch(Exception e) {
			return false;
		}
		return true;
	}
	
	public List<Message> getMessageList(){
		List<Message> al = new ArrayList<>();
		al = messageRepo.findAll();
		return al;
	}

	public List<Message> getMessage(int sendId, int recvId) {
		return messageRepo.findBySenderIdAndReceiverId(sendId,recvId);
	}
	
	

	
	
}
