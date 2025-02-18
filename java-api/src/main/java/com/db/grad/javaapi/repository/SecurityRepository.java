package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SecurityRepository extends JpaRepository<Security, Long> {

    @Query(nativeQuery = true, value = "select * from security")
    List<Security> findAll();

    @Query(nativeQuery = true, value = "SELECT * FROM security s \n" +
            "JOIN trades t ON t.security_id = s.id \n" +
            "JOIN book_user bu ON bu.book_id = t.book_id \n" +
            "WHERE DATEDIFF('day', s.maturity_date, '2021-08-02') BETWEEN -5 AND 5\n")
    List<Security> findMaturedBondsForUser();

    @Query(nativeQuery = true, value = "SELECT DISTINCT s.* FROM security s \n" +
            "WHERE s.maturity_date > '2021-01-01'")
    List<Security> findActiveBonds();

    @Query(nativeQuery = true, value = "SELECT security.* FROM security " +
            "JOIN trades ON security.id = trades.security_id " +
            "JOIN book_user ON trades.book_id = book_user.book_id " +
            "WHERE book_user.user_id = 3")
    List<Security> findBondsBooksResponsibleFor();
}
