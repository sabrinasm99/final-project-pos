package com.pointofsales.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pointofsales.dto.CategoryQueryParamsDTO;
import com.pointofsales.dto.CategoryResponse;
import com.pointofsales.model.Category;
import com.pointofsales.repository.CategoryRepository;

@Service
public class CategoryService {
  @Autowired
  private CategoryRepository categoryRepository;

  public List<CategoryResponse> findAll(CategoryQueryParamsDTO params) {
    return categoryRepository.findAllCategoriesWithTotalRelatedProducts(params.getSearchCategory());
  }

  public Category findById(Long id) {
    return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
  }

  public CategoryResponse findWithRelatedProductsById(Long id) {
    return categoryRepository.findCategoryWithTotalRelatedProductsById(id)
        .orElseThrow(() -> new RuntimeException("Category not found"));
  }

  @Transactional
  public Category create(Category category) {
    category.setCreatedAt(LocalDateTime.now());
    category.setUpdatedAt(LocalDateTime.now());
    return categoryRepository.save(category);
  }

  @Transactional
  public Category update(Long id, Category categoryDetails) {
    Category category = findById(id);

    if (categoryDetails.getName() != null) {
      category.setName(categoryDetails.getName());
    }

    category.setUpdatedAt(LocalDateTime.now());
    return categoryRepository.save(category);
  }

  @Transactional
  public void delete(Long id) {
    categoryRepository.deleteById(id);
  }
}
