package com.pointofsales.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import lombok.Data;

@Data
public class TransactionDTO {
  private UUID id;
  private Double totalAmount;
  private Double totalPay;
  private List<TransactionDetailDTO> transactionDetails;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
