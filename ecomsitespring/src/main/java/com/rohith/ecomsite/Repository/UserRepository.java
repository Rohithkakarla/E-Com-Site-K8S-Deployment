package com.rohith.ecomsite.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rohith.ecomsite.Model.User;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
	User findByEmail(String email);
}
