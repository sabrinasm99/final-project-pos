package com.pointofsales.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.pointofsales.dto.CategoryQueryParamsDTO;
import com.pointofsales.dto.CategoryResponse;
import com.pointofsales.model.Category;
import com.pointofsales.service.CategoryService;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {
  @Autowired
  private CategoryService categoryService;

  @GetMapping
  public List<CategoryResponse> findAllCategories(@RequestParam(required = false) String searchCategory) {
    CategoryQueryParamsDTO params = new CategoryQueryParamsDTO();
    params.setSearchCategory(searchCategory);
    return categoryService.findAll(params);
  }

  @GetMapping("/{id}")
  public CategoryResponse findCategoryById(@PathVariable Long id) {
    return categoryService.findWithRelatedProductsById(id);
  }

  @PostMapping
  public Category createCategory(@RequestBody Category category) {
    return categoryService.create(category);
  }

  @PutMapping("/{id}")
  public Category updateCategory(@PathVariable Long id, @RequestBody Category category) {
    return categoryService.update(id, category);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
    try {
      categoryService.delete(id);
      Map<String, String> response = new HashMap<>();
      response.put("message", "Delete id " + id + " successfully");
      return ResponseEntity.ok().body(response);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(Collections.singletonMap("error", e.getMessage()));
    }
  }
}