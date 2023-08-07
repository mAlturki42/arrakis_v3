package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.CounterParty;
import com.db.grad.javaapi.service.BookHandler;
import com.db.grad.javaapi.service.CounterPartyHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class CounterPartyController {

    private CounterPartyHandler counterPartyService;

    @Autowired
    public CounterPartyController(CounterPartyHandler ds)
    {
        counterPartyService = ds;
    }

    @GetMapping("/counterparty")
    public List<CounterParty> getAllCounterParty() {
        return counterPartyService.getAllCounterParty();
    }

}
