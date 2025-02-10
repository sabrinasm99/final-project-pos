package com.pointofsales.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.pointofsales.dto.TransactionDTO;
import com.pointofsales.dto.TransactionDetailDTO;
import com.pointofsales.model.Transaction;
import com.pointofsales.model.TransactionDetail;

@Component
public class TransactionMapper {
  public TransactionDTO mapToTransactionDTO(Transaction transaction) {
    TransactionDTO dto = new TransactionDTO();

    dto.setId(transaction.getId());
    dto.setTotalAmount(transaction.getTotalAmount());
    dto.setTotalPay(transaction.getTotalPay());
    List<TransactionDetailDTO> transactionDetails = transaction.getTransactionDetails().stream()
        .map(this::mapToTransactionDetailDTO).collect(Collectors.toList());
    dto.setTransactionDetails(transactionDetails);
    dto.setCreatedAt(transaction.getCreatedAt());
    dto.setUpdatedAt(transaction.getUpdatedAt());

    return dto;
  }

  public TransactionDetailDTO mapToTransactionDetailDTO(TransactionDetail transactionDetail) {
    TransactionDetailDTO dto = new TransactionDetailDTO();

    dto.setProduct(transactionDetail.getProduct());
    dto.setQuantity(transactionDetail.getQuantity());
    dto.setSubtotal(transactionDetail.getSubtotal());
    dto.setCreatedAt(transactionDetail.getCreatedAt());
    dto.setUpdatedAt(transactionDetail.getUpdatedAt());

    return dto;
  }
}
