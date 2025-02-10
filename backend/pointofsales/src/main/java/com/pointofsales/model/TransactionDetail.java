package com.pointofsales.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "transaction_details")
@IdClass(TransactionDetailId.class)
@Data
public class TransactionDetail {
  @Id
  @ManyToOne
  @JoinColumn(name = "transaction_id", nullable = false)
  private Transaction transaction;

  @Id
  @ManyToOne
  @JoinColumn(name = "product_id", nullable = false)
  private Product product;

  private Integer quantity;

  private Double subtotal;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}
