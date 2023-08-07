package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecurityHandler implements ISecurityService {

    @Autowired
    private SecurityRepository itsSecurityRepo;


    public SecurityHandler( SecurityRepository securityRepo )
    {
        itsSecurityRepo = securityRepo;
    }

    @Override
    public List<Security> getAllSecurity()
    {
        return itsSecurityRepo.findAll();
    }

    public List<Security>  getMaturedBondsForUser() {
        return itsSecurityRepo.findMaturedBondsForUser();
    }

    public List<Security>  getActiveBonds() {
        return itsSecurityRepo.findActiveBonds();
    }

}
