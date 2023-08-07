package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.CounterParty;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.User;

import java.util.List;

public interface ISecurityService {

    public List<Security> getAllSecurity();

    public List<Security> getMaturedBondsForUser();

    public List<Security> getActiveBonds();
}
