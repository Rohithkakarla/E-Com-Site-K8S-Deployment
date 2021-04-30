package com.rohith.ecomsite.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rohith.ecomsite.Model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

	Product findByName(String name);

	List<Product> findByCategoryid(String id);
	
	Product findByid(String id);
}
