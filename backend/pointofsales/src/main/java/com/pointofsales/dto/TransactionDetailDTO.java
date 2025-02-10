package com.pointofsales.dto;

import java.time.LocalDateTime;

import com.pointofsales.model.Product;

import lombok.Data;

@Data
public class TransactionDetailDTO {
  private Product product;
  private Integer quantity;
  private Double subtotal;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
