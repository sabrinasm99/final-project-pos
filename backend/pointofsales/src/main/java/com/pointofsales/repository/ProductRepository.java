package com.pointofsales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pointofsales.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
  @Query("SELECT p FROM Product p ORDER BY p.createdAt ASC")
  List<Product> findAllProductsAscSort();

  @Query("""
          SELECT p FROM Product p
          WHERE (:category IS NULL OR p.category.id = :category)
          AND (:search IS NULL OR p.name ILIKE %:search%)
          ORDER BY
          CASE WHEN :sortBy = 'name' AND :sortType = 'asc' THEN p.name END ASC,
          CASE WHEN :sortBy = 'name' AND :sortType = 'desc' THEN p.name END DESC,
          CASE WHEN :sortBy = 'price' AND :sortType = 'asc' THEN p.price END ASC,
          CASE WHEN :sortBy = 'price' AND :sortType = 'desc' THEN p.price END DESC,
          p.createdAt ASC
      """)
  List<Product> findAllProducts(
      @Param("category") Long category,
      @Param("search") String search,
      @Param("sortBy") String sortBy,
      @Param("sortType") String sortType);
}
