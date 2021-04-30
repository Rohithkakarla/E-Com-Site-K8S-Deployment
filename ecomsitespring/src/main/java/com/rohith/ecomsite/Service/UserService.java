package com.rohith.ecomsite.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohith.ecomsite.Model.User;
import com.rohith.ecomsite.Repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public User CreateUser(User user) {
		if (userRepository.findByEmail(user.getEmail()) == null) {
			return userRepository.save(user);
		} else {
			return null;
		}
	}
	
	public User UserLoginCheck(String email, String password) {
		User user = userRepository.findByEmail(email);
		if(user!=null && user.getPassword().equals(password)) {
			return user;
		}
		else {
			return null;
		}
	}
	
	public User UserCheck(String email) {
		User user = userRepository.findByEmail(email);
		if(user!=null) {
			return user;
		}
		else {
			return null;
		}
	}
}
