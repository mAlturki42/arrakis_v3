package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trades;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ITradesService
{
    public List<Trades> getAllTrades();
    //public List<Trades> getTradeByName(String TradeName );

    /*
    public Dog addDog(Dog theDog);

    public long getNoOfDogs();

    public boolean removeDog(long uniqueId);

    public Dog getDogById(long uniqueId);

    public Dog getDogByName(String dogsName );

    public Dog updateDogDetails(Dog dogToUpdate);
    */
}
