package com.rohith.ecomsite.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.ecomsite.Model.Cart;
import com.rohith.ecomsite.Service.CartService;

@RestController
@CrossOrigin
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@PostMapping("/add")
	public Cart AddItem(@RequestBody Cart cart) {
		return cartService.addCart(cart);
	}
	
	@PostMapping("/addproduct")
	public Cart AddProduct(@RequestParam String userid, @RequestParam String productid) {
		return cartService.addProduct(userid, productid);
	}
	
	@GetMapping("/getById/{id}")
	public Cart AddItem(@PathVariable String id) {
		return cartService.getByUserId(id);
	}
}
