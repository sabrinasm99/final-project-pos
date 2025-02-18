package com.pointofsales.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pointofsales.dto.TransactionDTO;
import com.pointofsales.dto.TransactionDTORequest;
import com.pointofsales.model.Transaction;

@Service
public class OrderService {
  @Autowired
  private TransactionService transactionService;

  @Autowired
  private TransactionDetailService transactionDetailService;

  @Transactional
  public TransactionDTO create(TransactionDTORequest transactionRequest) {
    Transaction transaction = transactionService.create(transactionRequest);

    try {
      return transactionDetailService.create(transaction, transactionRequest.getTransactionDetails());
    } catch (Exception e) {
      throw e;
    }
  }
}
