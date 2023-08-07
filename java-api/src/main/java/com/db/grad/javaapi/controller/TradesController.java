package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.service.TradesHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class TradesController {
    private TradesHandler tradesService;

    @Autowired
    public TradesController(TradesHandler ds)
    {
        tradesService = ds;
    }

    @GetMapping("/trades")
    public List <Trades> getAllTrades() {
        return tradesService.getAllTrades();
    }

    /*
    @GetMapping("/dogs/{id}")
    public ResponseEntity < Dog > getEmployeeById(@PathVariable(value = "id") Long id)
    throws ResourceNotFoundException {
        Dog dogs = dogsService.getDogById(id);
        return ResponseEntity.ok().body(dogs);
    }

    @PostMapping("/dogs")
    public Dog createDog(@Valid @RequestBody Dog dog) {
        return dogsService.addDog(dog);
    }

    @PutMapping("/dogs/{id}")
    public ResponseEntity < Dog > updateDog(@PathVariable(value = "id") Long id,
        @Valid @RequestBody Dog dogDetails) throws ResourceNotFoundException {

        final Trades updatedDogs = tradesService.updateDogDetails(dogDetails);
        return ResponseEntity.ok(updatedDogs);
    }

    @DeleteMapping("/dogs/{id}")
    public Map < String, Boolean > deleteDog(@PathVariable(value = "id") Long id)
    throws ResourceNotFoundException {
    	boolean removed = tradesService.removeTrade(id);

        Map < String, Boolean > response = new HashMap <>();
        if( removed )
            response.put("deleted", Boolean.TRUE);
        else
            response.put("deleted", Boolean.FALSE);

        return response;
    }*/
}
