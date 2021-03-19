package com.sigma.KOTSbackend.rest;

import com.sigma.KOTSbackend.domain.UserEntity;
import com.sigma.KOTSbackend.rest.DTO.UserRequest;
import com.sigma.KOTSbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@CrossOrigin
@RestController
public class AccountController {

    private final AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService){
        this.accountService=accountService;
    }

    @PostMapping("/register")
    public void register(@RequestBody(required = true) UserRequest request){
     this.accountService.registerUser(request);
    }

    @GetMapping("/get/user")
    public UserEntity getUser(Principal principal){
        return this.accountService.getUser(principal.getName());
    }
}