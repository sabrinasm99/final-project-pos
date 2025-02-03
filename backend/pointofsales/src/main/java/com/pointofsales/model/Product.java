package com.pointofsales.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products")
@Data
public class Product {
  @Id
  @GeneratedValue
  private Long id;

  private String name;

  private Double price;

  @ManyToOne
  @JoinColumn(name = "category_id", nullable = false)
  private Category category;

  private Integer stock;

  private String image;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}
