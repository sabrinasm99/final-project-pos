package com.pointofsales.dto;

import lombok.Data;

@Data
public class ProductRequest {
  private String name;
  private Double price;
  private Long categoryId;
  private Integer stock;
  private String image;
}
