package com.rohith.ecomsite.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
	
	@Id
	private String id;

	private String name;
	
	private String categoryid;

	private String price;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(String categoryid) {
		this.categoryid = categoryid;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", categoryid=" + categoryid + ", price=" + price + "]";
	}

	public Product(String id, String name, String categoryid, String price) {
		super();
		this.id = id;
		this.name = name;
		this.categoryid = categoryid;
		this.price = price;
	}

	public Product() {
	}
	
	
	
}
