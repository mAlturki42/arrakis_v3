package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.CounterParty;
import com.db.grad.javaapi.repository.BookRepository;
import com.db.grad.javaapi.repository.CounterPartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CounterPartyHandler implements ICounterPartyService {

    private CounterPartyRepository itscounterpartyRepo;

    @Autowired
    public CounterPartyHandler( CounterPartyRepository counterpartyRepo )
    {
        itscounterpartyRepo = counterpartyRepo;
    }

    @Override
    public List<CounterParty> getAllCounterParty() {
        return itscounterpartyRepo.findAll();
    }
}
