package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.*;
import com.db.grad.javaapi.repository.TradesRepository;


import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Date;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class TradesHandlerTest {

    private Book book;
    //private Bookuser user;
    private User user;
    private CounterParty CounterParty;
    private Security Security;
    private Trades Trades;



    @Before
    public void setUp(){
        book = new Book();
        user = new User();
        CounterParty = new CounterParty();
        Security = new Security();
        Trades = new Trades();

    }

    @Test
    public void testDefaultConstructorForBook(){
        assertNotNull("Default constructor should initialize the book", book);
    }

    @Test
    public void testSetAndGetIdForBook(){
        int id = 1;
        book.setId(id);
        assertEquals(id, book.getId());
    }

    @Test
    public void testSetAndGetNameForBook(){
        String name = "test book";
        book.setName(name);
        assertEquals(name, book.getName());
    }

    @Test
    public void testConfirmUserIdGenerated(){
        int id = 1;
        user.setId(id);
        assertTrue(user.getId() > 0);
    }

    @Test
    public void testConfirmCounterPartyID(){
        int id = 1;
        CounterParty.setId(id);
        assertTrue(CounterParty.getId() > 0);
    }

    @Test
    public void testSetAndGetCounterPartyName(){
        String name = "test CounterParty";
        CounterParty.setName(name);
        assertEquals(name, CounterParty.getName());
    }
    @Test
    public void testSetAndGetSecurityId(){
        int id = 1;
        Security.setId(id);
        assertTrue(Security.getId() > 0);
    }
    @Test
    public void testSetAndGetSecurityIssuerName(){
        String name = "test SecurityIssuer";
        Security.setIssuer_name(name);
        assertEquals(name, Security.getIssuer_name());
    }

    @Test
    public void testSetAndGetSecurityMaturityDate(){
        String date = "test SecurityMaturityDate";
        Security.setMaturity_date(new Date());
        assertEquals(new Date(), Security.getMaturity_date());
    }

    //@Test
    //public void testSetAndGetSecurityCoupon(){
     //   String name = "test SecurityCoupon";
      //  Security.setCoupon(0);
      //  assertEquals(name, Security.getCurrency());
  //  }

    @Test
    public void testSetAndGetSecurityIsIn(){
        String name = "test SecurityIsIn";
        Security.setIsin(name);
        assertEquals(name, Security.getIsin());
    }

    @Test
    public void testSetAndGetSecurityCusIp(){
        String name = "test SecurityCusIp";
        Security.setCusip(name);
        assertEquals(name, Security.getCusip());
    }

    @Test
    public void testSetAndGetSecurityCurrency(){
        String name = "test SecurityCurrency";
        Security.setCurrency(name);
        assertEquals(name, Security.getCurrency());
    }

    @Test
    public void testSetAndGetSecurityStatus(){
        String name = "test SecurityStatus";
        Security.setStatus(name);
        assertEquals(name, Security.getStatus());
    }

    @Test
    public void testSetAndGetSecurityType(){
        String name = "test SecurityType";
        Security.setType(name);
        assertEquals(name, Security.getType());
    }

    @Test
    public void testConfirmTradeId(){
        int id = 1;
        Trades.setId(id);
        assertTrue(Trades.getId() > 0);
    }

    @Test
    public void testConfirmTradeQuantity(){
        int id = 1;
        Trades.setQuantity(1);
        assertTrue(Trades.getQuantity() > 0);
    }

    @Test
    public void testSetAndGetTradesBuySell(){
        String name = "test TradesBuySell";
        Trades.setBuySell(name);
        assertEquals(name, Trades.getBuySell());
    }

    @Test
    public void testSetAndGetTradeDate(){
        String date = "test TradeDate";
        Trades.setTradeDate(new Date());
        assertEquals(new Date(), Trades.getTradeDate());
    }

    @Test
    public void testSetAndGetTradeSettlementDate(){
        String date = "test TradeSettlementDate";
        Trades.setSettlementDate(new Date());
        assertEquals(new Date(), Trades.getSettlementDate());
    }

    @Test
    public void testConfirmUsername(){
        String name = "test UserName";
        user.setName(name);
        assertEquals(name, user.getName());
    }

    @Test
    public void testConfirmUserEmail(){
        String name = "test UserEmail";
        user.setEmail(name);
        assertEquals(name, user.getEmail());
    }

    @Test
    public void testConfirmUserRole(){
        String name = "test UserRole";
        user.setRole(name);
        assertEquals(name, user.getRole());
    }








}
