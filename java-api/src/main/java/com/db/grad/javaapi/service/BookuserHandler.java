package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bookuser;
import com.db.grad.javaapi.repository.BookRepository;
import com.db.grad.javaapi.repository.BookuserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookuserHandler implements IBookuserService {

    private BookuserRepository itsBookuserRepo;

    @Autowired
    public BookuserHandler( BookuserRepository bookuserRepo )
    {
        itsBookuserRepo = bookuserRepo;
    }

    @Override
    public List<Bookuser> getAllBooksuser()
    {
        return itsBookuserRepo.findAll();
    }
}
