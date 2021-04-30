package com.rohith.ecomsite.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohith.ecomsite.Model.Category;
import com.rohith.ecomsite.Repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	public Category AddCategory(Category category) {
		if (categoryRepository.findByName(category.getName()) == null) {
			return categoryRepository.save(category);
		} else {
			return null;
		}
	}
	
	public List<Category> getAllCategories(){
		return categoryRepository.findAll();
	}
	
	public Category getCategoryById(String id) {
		return categoryRepository.findByid(id);
	}
}
