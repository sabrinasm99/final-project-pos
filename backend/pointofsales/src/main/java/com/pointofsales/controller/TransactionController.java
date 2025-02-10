package com.pointofsales.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pointofsales.dto.TransactionDTO;
import com.pointofsales.dto.TransactionDTORequest;
import com.pointofsales.model.Transaction;
import com.pointofsales.service.TransactionDetailService;
import com.pointofsales.service.TransactionService;

@RestController
@RequestMapping("/api/v1/transactions")
public class TransactionController {
  @Autowired
  private TransactionService transactionService;

  @Autowired
  private TransactionDetailService transactionDetailService;

  @GetMapping
  public List<TransactionDTO> findAllTransactions() {
    return transactionService.findAll();
  }

  @GetMapping("/{id}")
  public TransactionDTO findTransactionById(@PathVariable UUID id) {
    return transactionService.findByIdReturnsDTO(id);
  }

  @PostMapping
  public TransactionDTO createTransaction(@RequestBody TransactionDTORequest transactionRequest) {
    Transaction transaction = transactionService.create(transactionRequest);
    return transactionDetailService.create(transaction, transactionRequest.getTransactionDetails());
  }
}
