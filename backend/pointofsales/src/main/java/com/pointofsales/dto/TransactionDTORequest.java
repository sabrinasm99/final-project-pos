package com.pointofsales.dto;

import java.util.List;

import lombok.Data;

@Data
public class TransactionDTORequest {
  private Double totalAmount;
  private Double totalPay;
  private List<TransactionDetailDTORequest> transactionDetails;
}
