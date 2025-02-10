package com.pointofsales.dto;

import lombok.Data;

@Data
public class TransactionDetailDTORequest {
  private Long productId;
  private Integer quantity;
}
