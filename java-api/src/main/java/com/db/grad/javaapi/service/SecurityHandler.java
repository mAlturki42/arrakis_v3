package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

    public List<Security> getSecurityWithin5Days() throws ParseException {
        List<Security> securities = new ArrayList<>();
        String dateString = "2021-08-02 00:00:00";
        String endString1 = "2021-08-07 00:00:00";
        String endString2 = "2021-07-28 00:00:00";
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date currentDate = dateFormat.parse(dateString);
        Date endDateAfter = dateFormat.parse(endString1);
        Date endDateBefore = dateFormat.parse(endString2);

        return itsSecurityRepo.findMaturityDatesWithin5Days(endDateBefore, endDateAfter);
    }
}
