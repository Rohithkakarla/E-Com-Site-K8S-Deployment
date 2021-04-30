package com.rohith.ecomsite.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rohith.ecomsite.Model.Cart;
import com.rohith.ecomsite.Model.Category;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {

	Cart findByuserid(String id);
}
