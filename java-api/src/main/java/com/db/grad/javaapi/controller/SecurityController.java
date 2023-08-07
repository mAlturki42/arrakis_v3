package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.service.BookHandler;
import com.db.grad.javaapi.service.SecurityHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityController {

    private SecurityHandler securityService;

    @Autowired
    public SecurityController(SecurityHandler ds)
    {
        securityService = ds;
    }

    @GetMapping("/security")
    public List<Security> getAllSecurity() {
        return securityService.getAllSecurity();
    }

    @GetMapping("/maturityBonds")
    public List<Security> getMaturedBondsForUser() {
        return securityService.getMaturedBondsForUser();
    }

    @GetMapping("/activeBonds")
    public List<Security> getActiveBonds() {
        return securityService.getActiveBonds();
    }
}
