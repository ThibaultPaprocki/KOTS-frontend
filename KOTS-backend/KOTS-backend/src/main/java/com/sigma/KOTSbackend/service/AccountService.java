package com.sigma.KOTSbackend.service;

import com.sigma.KOTSbackend.security.UserCredentials;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import app.rest.model.UserRequest;

@Service
public class AccountService {

    BCryptPasswordEncoder newPassword;
    
    public AccountService(){
        this.newPassword = new BCryptPasswordEncoder();
    }

    public void displayUserInfo(UserRequest request) {

        UserCredentials user = new UserCredentials();
        user.setUsername(request.getUsername());
        user.setPassword(this.newPassword.encode(request.getPassword()));
    }
}
