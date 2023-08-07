package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.CounterParty;
import com.db.grad.javaapi.model.Trades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CounterPartyRepository extends JpaRepository<CounterParty, Long> {

    @Query(nativeQuery = true, value = "select * from CounterParty where name = :name")
    List<CounterParty> findAll();

}
