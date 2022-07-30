package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Message;

@Repository
public interface MessageRepo extends JpaRepository<Message,Long>{

	
	@Query (value = "SELECT * FROM message WHERE sender_id in (?1,?2) AND receiver_id in(?2,?1 )",nativeQuery = true)
	List<Message> findBySenderIdAndReceiverId(int sendId, int recvId);
}
