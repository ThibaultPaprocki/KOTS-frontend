package com.sigma.KOTSbackend.rest;

import com.sigma.KOTSbackend.rest.model.UserRequest;
import com.sigma.KOTSbackend.service.AccountService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class AccountController {

    private AccountService accountService;

    public AccountController(){
        this.accountService = new AccountService();
    }

    @PostMapping("register")
    public void register(@RequestBody(required = true) UserRequest request){
     this.accountService.registerUser(request);
    }
}