package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.Bookuser;
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
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class TradesHandlerTest {

    private Book book;
    private Bookuser user;

    @Before
    public void setUp(){
        book = new Book();
        user = new Bookuser();
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




}
