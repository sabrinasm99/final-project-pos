package com.pointofsales.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pointofsales.dto.CategoryResponse;
import com.pointofsales.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
  @Query("SELECT c.id as id, c.name as name, COUNT(p) as totalRelatedProducts, " +
      "c.createdAt as createdAt, c.updatedAt as updatedAt " +
      "FROM Category c " +
      "LEFT JOIN Product p ON c.id = p.category.id " +
      "WHERE (:searchCategory IS NULL OR c.name ILIKE %:searchCategory%)" +
      "GROUP BY c.id, c.name, c.createdAt, c.updatedAt " +
      "ORDER BY c.id")
  List<CategoryResponse> findAllCategoriesWithTotalRelatedProducts(@Param("searchCategory") String searchCategory);

  @Query("SELECT c.id as id, c.name as name, COUNT(p) as totalRelatedProducts, " +
      "c.createdAt as createdAt, c.updatedAt as updatedAt " +
      "FROM Category c " +
      "LEFT JOIN Product p ON c.id = p.category.id " +
      "WHERE c.id = :id " +
      "GROUP BY c.id, c.name, c.createdAt, c.updatedAt " +
      "ORDER BY c.id")
  Optional<CategoryResponse> findCategoryWithTotalRelatedProductsById(@Param("id") Long id);
}
