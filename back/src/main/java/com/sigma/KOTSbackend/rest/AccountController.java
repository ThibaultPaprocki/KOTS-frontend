package com.sigma.KOTSbackend.rest;

import com.sigma.KOTSbackend.rest.DTO.UserRequest;
import com.sigma.KOTSbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class AccountController {

    @Autowired
    private AccountService accountService;

    public AccountController(){
    }

    @PostMapping("/register")
    public void register(@RequestBody(required = true) UserRequest request){
     this.accountService.registerUser(request);
    }
}