package com.pointofsales.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "transactions")
@Data
public class Transaction {
  @Id
  @GeneratedValue
  @JdbcTypeCode(SqlTypes.UUID)
  private UUID id;

  @Column(name = "total_amount")
  private Double totalAmount;

  @Column(name = "total_pay")
  private Double totalPay;

  @OneToMany(mappedBy = "transaction")
  private List<TransactionDetail> transactionDetails;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}
