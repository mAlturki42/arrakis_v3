package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface SecurityRepository extends JpaRepository<Security, Long> {

   // @Query(nativeQuery = true, value = "select * from security where name = :name")
    @Query(nativeQuery = true, value = "select * from security")

    List<Security> findAll();

    @Query(nativeQuery = true, value ="Select * from security s WHERE s.maturity_date BETWEEN :startDate AND :endDate")
    List<Security> findMaturityDatesWithin5Days(Date startDate, Date endDate);

}
