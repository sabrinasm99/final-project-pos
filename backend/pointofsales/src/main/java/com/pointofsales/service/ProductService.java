package com.pointofsales.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pointofsales.dto.ProductQueryParamsDTO;
import com.pointofsales.dto.ProductRequest;
import com.pointofsales.model.Category;
import com.pointofsales.model.Product;
import com.pointofsales.repository.CategoryRepository;
import com.pointofsales.repository.ProductRepository;

@Service
public class ProductService {
  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private CategoryRepository categoryRepository;

  public List<Product> findAll(ProductQueryParamsDTO params) {
    Long category = params.getCategory();
    String search = params.getSearch();
    String sortBy = params.getSortBy();
    String sortType = params.getSortType();

    return productRepository.findAllProducts(category, search, sortBy, sortType);
  }

  public Product findById(Long id) {
    return productRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Product not found"));
  }

  @Transactional
  public Product create(ProductRequest productRequest) {
    Product product = new Product();
    product.setName(productRequest.getName());
    product.setPrice(productRequest.getPrice());
    product.setStock(productRequest.getStock());
    product.setImage(productRequest.getImage());
    Category category = categoryRepository.findById(productRequest.getCategoryId())
        .orElseThrow(() -> new RuntimeException("Category not found"));
    product.setCategory(category);
    product.setCreatedAt(LocalDateTime.now());
    product.setUpdatedAt(LocalDateTime.now());

    return productRepository.save(product);
  }

  @Transactional
  public Product update(Long id, ProductRequest productRequest) {
    Product product = findById(id);

    if (productRequest.getName() != null) {
      product.setName(productRequest.getName());
    }

    if (productRequest.getPrice() != null) {
      product.setPrice(productRequest.getPrice());
    }

    if (productRequest.getCategoryId() != null) {
      Category category = categoryRepository.findById(productRequest.getCategoryId())
          .orElseThrow(() -> new RuntimeException("Category not found"));
      product.setCategory(category);
    }

    if (productRequest.getStock() != null) {
      product.setStock(productRequest.getStock());
    }

    if (productRequest.getImage() != null) {
      product.setImage(productRequest.getImage());
    }

    product.setUpdatedAt(LocalDateTime.now());

    return productRepository.save(product);
  }

  @Transactional
  public void delete(Long id) {
    productRepository.deleteById(id);
  }
}
