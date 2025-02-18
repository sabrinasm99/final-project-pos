package com.pointofsales.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pointofsales.dto.ProductQueryParamsDTO;
import com.pointofsales.dto.ProductRequest;
import com.pointofsales.model.Product;
import com.pointofsales.service.ProductService;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
  @Autowired
  private ProductService productService;

  @GetMapping
  public List<Product> findAllProducts(@RequestParam(required = false) String sortBy,
      @RequestParam(required = false) String sortType, @RequestParam(required = false) Long category,
      @RequestParam(required = false) String search) {
    ProductQueryParamsDTO params = new ProductQueryParamsDTO();
    params.setSortBy(sortBy);
    params.setSortType(sortType);
    params.setCategory(category);
    params.setSearch(search);
    return productService.findAll(params);
  }

  @GetMapping("/{id}")
  public Product findProductById(@PathVariable Long id) {
    return productService.findById(id);
  }

  @PostMapping
  public Product createProduct(@RequestBody ProductRequest productRequest) {
    return productService.create(productRequest);
  }

  @PutMapping("/{id}")
  public Product updateProduct(@PathVariable Long id, @RequestBody ProductRequest productRequest) {
    return productService.update(id, productRequest);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
    try {
      productService.delete(id);
      Map<String, String> response = new HashMap<>();
      response.put("message", "Delete id " + id + " successfully");
      return ResponseEntity.ok().body(response);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(Collections.singletonMap("error", e.getMessage()));
    }
  }
}
