package com.rohith.ecomsite.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohith.ecomsite.Model.Cart;
import com.rohith.ecomsite.Repository.CartRepository;

@Service
public class CartService {

	@Autowired
	CartRepository cartRepository;
	
	public Cart addCart(Cart cart) {
		return cartRepository.save(cart);	
	}
	
	public Cart getByUserId(String id) {
		return cartRepository.findByuserid(id);
	}
	
	public Cart addProduct(String userid, String productid) {
		
		Cart c = cartRepository.findByuserid(userid);
		c.getProductid().add(productid);
		return cartRepository.save(c);
		
	}
}
