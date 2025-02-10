package com.pointofsales.model;

import java.io.Serializable;
import java.util.UUID;

import lombok.Data;

@Data
public class TransactionDetailId implements Serializable {
  private UUID transaction;
  private Long product;
}
