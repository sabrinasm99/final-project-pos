package com.pointofsales.dto;

import java.time.LocalDateTime;

public interface CategoryResponse {
  Long getId();

  String getName();

  Integer getTotalRelatedProducts();

  LocalDateTime getCreatedAt();

  LocalDateTime getUpdatedAt();
}
