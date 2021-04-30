package com.rohith.ecomsite.Repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rohith.ecomsite.Model.Category;

@Repository
public interface CategoryRepository extends MongoRepository<Category,String>{

	Category findByName(String name);
	Category findByid(String id);
}
