package com.db.grad.javaapi.controller;


import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.service.BookHandler;
import com.db.grad.javaapi.service.TradesHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private BookHandler bookService;

    @Autowired
    public BookController(BookHandler ds)
    {
        bookService = ds;
    }

    @GetMapping("/book")
    public List <Book> getAllBooks() {
        return bookService.getAllBooks();
    }

}
