package com.pointofsales.dto;

import lombok.Data;

@Data
public class ProductQueryParamsDTO {
  private String sortBy;
  private String sortType;
  private Long category;
  private String search;
}
