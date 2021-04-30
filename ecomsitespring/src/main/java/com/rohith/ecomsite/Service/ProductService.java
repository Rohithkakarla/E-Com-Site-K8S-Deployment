package com.rohith.ecomsite.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohith.ecomsite.Model.Product;
import com.rohith.ecomsite.Repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
		
	public Product AddProduct(Product product) {
		if (productRepository.findByName(product.getName()) == null) {
			return productRepository.save(product);
		} else {
			return null;
		}
	}
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	public List<Product> getProductsByCategoryId(String id){
		return productRepository.findByCategoryid(id);
	}
	
	public Product getProductById(String id) {
		return productRepository.findByid(id);
	}
}
