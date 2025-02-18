package com.pointofsales.exception;

import java.util.Date;

import lombok.*;

@AllArgsConstructor
@Data
public class ErrorDetails {
  private Date timestamp;
  private String message;
  private String details;
}
