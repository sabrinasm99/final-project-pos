package com.pointofsales.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pointofsales.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

}
