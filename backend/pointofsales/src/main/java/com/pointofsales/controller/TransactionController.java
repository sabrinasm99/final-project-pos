package com.pointofsales.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.pointofsales.dto.TransactionDTO;
import com.pointofsales.dto.TransactionDTORequest;
import com.pointofsales.service.OrderService;
import com.pointofsales.service.TransactionService;

@RestController
@RequestMapping("/api/v1/transactions")
public class TransactionController {
  @Autowired
  private TransactionService transactionService;

  @Autowired
  private OrderService orderService;

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
    return orderService.create(transactionRequest);
  }
}
