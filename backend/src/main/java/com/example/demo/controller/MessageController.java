package com.example.demo.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Message;
import com.example.demo.service.MessageService;


@RestController
@RequestMapping("/person")
@CrossOrigin(origins="*")
public class MessageController {
	
	

	@Autowired
	private MessageService messageService;
	
	
	@PostMapping("/send")
	public boolean send(@RequestBody Message msg) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		msg.setSendTime(date);
		if(messageService.saveMessage(msg)) {
			return true;
		}
		else {
			System.out.println("error occured");
			return false;
		}
	}
	
	@GetMapping("/getMsg")
	public List<Message> getMessage(){
		
		return messageService.getMessageList();
		
	}
	
	@GetMapping("/getMsgById")
	public List<Message> getMessage(@RequestParam int sendId, @RequestParam int recvId){
		return messageService.getMessage(sendId, recvId);
	}
}






