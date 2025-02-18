package com.pointofsales.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pointofsales.dto.TransactionDTO;
import com.pointofsales.dto.TransactionDTORequest;
import com.pointofsales.mapper.TransactionMapper;
import com.pointofsales.model.Transaction;
import com.pointofsales.repository.TransactionRepository;

@Service
public class TransactionService {
  @Autowired
  private TransactionRepository transactionRepository;

  @Autowired
  private TransactionMapper transactionMapper;

  public List<TransactionDTO> findAll() {
    List<Transaction> transactions = transactionRepository.findAll();
    return transactions.stream().map(transactionMapper::mapToTransactionDTO).collect(Collectors.toList());
  }

  public TransactionDTO findByIdReturnsDTO(UUID id) {
    Transaction transaction = findById(id);
    return transactionMapper.mapToTransactionDTO(transaction);
  }

  public Transaction findById(UUID id) {
    return transactionRepository.findById(id).orElseThrow(() -> new RuntimeException("Transaction not found"));
  }

  public Transaction create(TransactionDTORequest transactionRequest) {
    Transaction transaction = new Transaction();
    transaction.setTotalAmount(transactionRequest.getTotalAmount());
    transaction.setTotalPay(transactionRequest.getTotalPay());
    transaction.setCreatedAt(LocalDateTime.now());
    transaction.setUpdatedAt(LocalDateTime.now());

    return transactionRepository.save(transaction);
  }
}
