package com.rohith.ecomsite.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.ecomsite.Model.User;
import com.rohith.ecomsite.Service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public User UserLogin(@RequestParam String email, @RequestParam String password){
		return userService.UserLoginCheck(email, password);
	}
	
	@PostMapping("/usercheck")
	public User UserCheck(@RequestParam String email){
		return userService.UserCheck(email);
	}
	
	@PostMapping("/register")
	public User UserRegistration(@RequestBody User user){
		return userService.CreateUser(user);
		
	}
}
