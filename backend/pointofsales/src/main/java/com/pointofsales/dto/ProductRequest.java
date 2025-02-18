package com.pointofsales.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductRequest {
  private String name;
  private Double price;
  private Long categoryId;
  private Integer stock;
  private String image;
}
