package com.pointofsales.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pointofsales.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
