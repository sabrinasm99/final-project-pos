package com.pointofsales.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pointofsales.dto.ProductRequest;
import com.pointofsales.dto.TransactionDTO;
import com.pointofsales.dto.TransactionDetailDTORequest;
import com.pointofsales.exception.InvalidTransactionException;
import com.pointofsales.mapper.TransactionMapper;
import com.pointofsales.model.Product;
import com.pointofsales.model.Transaction;
import com.pointofsales.model.TransactionDetail;
import com.pointofsales.repository.TransactionDetailRepository;

@Service
public class TransactionDetailService {
  @Autowired
  private TransactionDetailRepository transactionDetailRepository;

  @Autowired
  private ProductService productService;

  @Autowired
  private TransactionMapper transactionMapper;

  public List<TransactionDetail> findAll() {
    return transactionDetailRepository.findAll();
  }

  public TransactionDetail findByTransactionIdAndProductId(UUID transactionId, Long productId) {
    return transactionDetailRepository.findByTransactionIdAndProductId(transactionId, productId)
        .orElseThrow(() -> new RuntimeException("Transaction Detail not found"));
  }

  public TransactionDTO create(Transaction transaction, List<TransactionDetailDTORequest> orderItemList) {

    List<TransactionDetail> transactionDetails = orderItemList.stream().map(
        item -> {
          TransactionDetail detail = new TransactionDetail();
          Product product = productService.findById(item.getProductId());
          if (item.getQuantity() > product.getStock()) {
            throw new InvalidTransactionException("Product quantity is greater than product stock.");
          }
          product.setStock(product.getStock() - item.getQuantity());
          ProductRequest productRequest = new ProductRequest(product.getName(), product.getPrice(),
              product.getCategory().getId(), product.getStock(), product.getImage());
          productService.update(product.getId(), productRequest);
          detail.setTransaction(transaction);
          detail.setProduct(product);
          detail.setQuantity(item.getQuantity());
          detail.setSubtotal(product.getPrice() * item.getQuantity());
          detail.setCreatedAt(LocalDateTime.now());
          detail.setUpdatedAt(LocalDateTime.now());
          return detail;
        }).collect(Collectors.toList());

    transactionDetailRepository.saveAll(transactionDetails);
    transaction.setTransactionDetails(transactionDetails);

    return transactionMapper.mapToTransactionDTO(transaction);
  }
}
