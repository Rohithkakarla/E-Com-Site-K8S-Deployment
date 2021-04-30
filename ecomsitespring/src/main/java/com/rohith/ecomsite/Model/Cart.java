package com.rohith.ecomsite.Model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart")
public class Cart {
	
	@Id
	private String userid;
	
	private List<String> productid;


	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public List<String> getProductid() {
		return productid;
	}

	public void setProductid(List<String> productid) {
		this.productid = productid;
	}



	@Override
	public String toString() {
		return "Cart [userid=" + userid + ", productid=" + productid + "]";
	}

	public Cart(String userid, List<String> productid) {
		super();
		this.userid = userid;
		this.productid = productid;
	}

	public Cart() {

	}
	
	
}
