package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

@Entity
@Table(name = "trades")
public class Trades {
    @Id
    private int id;
    private int book_id;
    private int security_id;
    private int counterparty_id;
    private String trade_currency;
    private String trade_status;
    private int quantity;
    private float unit_price;
    private String trade_type;
    private Date trade_date;
    private Date trade_settlement_date;

    /*public Trades(int id, int bookId, int securityId, int counterpartyId, String currency, String status, int quantity, float unitPrice, String buySell, Date tradeDate, Date settlementDate) {
        this.id = id;
        this.bookId = bookId;
        this.securityId = securityId;
        this.counterpartyId = counterpartyId;
        this.currency = currency;
        this.status = status;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.buySell = buySell;
        this.tradeDate = tradeDate;
        this.settlementDate = settlementDate;
    }*/

    // getters and setters

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "book_id", nullable = false)
    public int getBookId() {
        return book_id;
    }
    public void setBookId(int bookId) {
        this.book_id = bookId;
    }
    @Column(name = "security_id", nullable = false)
    public int getSecurityId() {
        return security_id;
    }
    public void setSecurityId(int securityId) {
        this.security_id = securityId;
    }

    @Column(name = "counterparty_id", nullable = false)
    public int getCounterpartyId() {
        return counterparty_id;
    }
    public void setCounterpartyId(int counterpartyId) {
        this.counterparty_id = counterpartyId;
    }

    @Column(name = "trade_currency", nullable = false)
    public String getCurrency() {
        return trade_currency;
    }
    public void setCurrency(String currency) {
        this.trade_currency = currency;
    }

    @Column(name = "trade_status", nullable = false)
    public String getStatus() {
        return trade_status;
    }
    public void setStatus(String status) {
        this.trade_status = status;
    }

    @Column(name = "quantity", nullable = false)
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Column(name = "unit_price", nullable = false)
    public float getUnitPrice() {
        return unit_price;
    }
    public void setUnitPrice(float unitPrice) {
        this.unit_price = unitPrice;
    }

    @Column(name = "trade_type", nullable = false)
    public String getBuySell() {
        return trade_type;
    }
    public void setBuySell(String buySell) {
        this.trade_type = buySell;
    }

    @Column(name = "trade_date", nullable = false)
    public Date getTradeDate() {
        return trade_date;
    }
    public void setTradeDate(Date tradeDate) {
        this.trade_date = tradeDate;
    }

    @Column(name = "trade_settlement_date", nullable = false)
    public Date getSettlementDate() {
        return trade_settlement_date;
    }
    public void setSettlementDate(Date settlementDate) {
        this.trade_settlement_date = settlementDate;
    }
}

/*
@Entity
@Table(name = "dogs")
public class Dog
{
    @Id
    private long id;
    private String name;
    private long age;

    @Id
    @Column(name = "dog_id", nullable = false)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "age", nullable = false)
    public long getAge() {
        return age;
    }
    public void setAge(long age) {
        this.age = age;
    }
}*/
