package com.rohith.ecomsite.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.ecomsite.Model.Product;
import com.rohith.ecomsite.Service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

	@Autowired
	ProductService productService;
	
	@PostMapping("/add")
	public Product CreateProduct(@RequestBody Product product) {
		return productService.AddProduct(product);
	}
	
	@GetMapping("/getall")
	public List<Product> getAllProduct(){
		return productService.getAllProducts();
	}
	
	@GetMapping("/getProductsByCategoryId/{id}")
	public List<Product> getProductsByCategoryId(@PathVariable String id){
		return productService.getProductsByCategoryId(id);
	}
	
	@GetMapping("/getProductById/{id}")
	public Product getProductById(@PathVariable String id){
		return productService.getProductById(id);
	}
}
