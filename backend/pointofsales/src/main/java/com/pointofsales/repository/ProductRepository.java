package com.pointofsales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pointofsales.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
  @Query("SELECT p FROM Product p ORDER BY p.createdAt ASC")
  List<Product> findAllProductsAscSort();
}
