package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookHandler implements IBookService {

    private BookRepository itsBookRepo;

    @Autowired
    public BookHandler( BookRepository bookRepo )
    {
        itsBookRepo = bookRepo;
    }

    @Override
    public List<Book> getAllBooks() {
        return itsBookRepo.findAll();
    }



}
