package com.rohith.ecomsite.Controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.ecomsite.Model.Category;
import com.rohith.ecomsite.Service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@PostMapping("/add")
	public Category CreateCategory(@RequestBody Category category) {
		return categoryService.AddCategory(category);
	}
	
	@GetMapping("/getall")
	public List<Category> getAllCategories(){
		return categoryService.getAllCategories();
	}
	
	@GetMapping("/getById/{id}")
	public Category getCategoryById(@PathVariable String id){
		return categoryService.getCategoryById(id);
	}
	
}
