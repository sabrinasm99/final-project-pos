package com.pointofsales.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pointofsales.model.TransactionDetail;
import com.pointofsales.model.TransactionDetailId;

public interface TransactionDetailRepository extends JpaRepository<TransactionDetail, TransactionDetailId> {
  Optional<TransactionDetail> findByTransactionIdAndProductId(UUID transactionId, Long productId);
}
