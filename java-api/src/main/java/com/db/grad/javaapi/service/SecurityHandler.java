package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecurityHandler implements ISecurityService {

    private SecurityRepository itsSecurityRepo;

    @Autowired
    public SecurityHandler( SecurityRepository securityRepo )
    {
        itsSecurityRepo = securityRepo;
    }

    @Override
    public List<Security> getAllSecurity()
    {
        return itsSecurityRepo.findAll();
    }
}
