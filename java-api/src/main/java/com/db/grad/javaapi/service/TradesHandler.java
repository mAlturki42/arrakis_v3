package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.repository.TradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradesHandler implements ITradesService
{
    @Autowired
    private TradesRepository itsTradesRepo;


    public TradesHandler( TradesRepository tradeRepo )
    {
        itsTradesRepo = tradeRepo;
    }

    @Override
    public List<Trades> getAllTrades()
    {
        return itsTradesRepo.findAll();
    }

    /*
    @Override
    public Dog addDog(Dog theDog)
    {
        return itsDogsRepo.save( theDog );
    }

    @Override
    public long getNoOfDogs()
    {
        return itsDogsRepo.count();
    }

    @Override
    public boolean removeDog(long uniqueId)
    {
        boolean result = false;

        Optional<Dog> theDog = itsDogsRepo.findById(uniqueId);
        if(theDog.isPresent())
        {
            itsDogsRepo.delete(theDog.get());
            result = true;
        }

        return  result;
    }

    @Override
    public Dog getDogById(long uniqueId)
    {
        return itsDogsRepo.findById(uniqueId).get();
    }

    @Override
    public Dog getDogByName(String dogsName )
    {
        Dog dogToFind = new Dog();
        dogToFind.setName(dogsName);
        List<Dog> dogs = itsDogsRepo.findByName(dogToFind);
        Dog result = null;

        if( dogs.size() == 1)
            result = dogs.get(0);

        return result;
    }

    @Override
    public Dog updateDogDetails(Dog dogToUpdate)
    {
        return itsDogsRepo.save( dogToUpdate );
    }*/
}
