package com.sigma.KOTSbackend.service;

import com.sigma.KOTSbackend.repository.AccountRepository;
import com.sigma.KOTSbackend.domain.UserEntity;
import com.sigma.KOTSbackend.rest.DTO.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private final BCryptPasswordEncoder newPassword;
    private final AccountRepository accountRepository;
    private final JdbcUserDetailsManager jdbcUserDetailsManager;

    @Autowired
    public AccountService(BCryptPasswordEncoder newPassword,AccountRepository accountRepository,JdbcUserDetailsManager jdbcUserDetailsManager){
        this.newPassword = newPassword;
        this.accountRepository = accountRepository;
        this.jdbcUserDetailsManager = jdbcUserDetailsManager;
    }

    public void registerUser(UserRequest request){
        UserDetails userDetails = new User(request.getUsername(),newPassword.encode(request.getPassword()), List.of(new SimpleGrantedAuthority("USER")));
        this.jdbcUserDetailsManager.createUser(userDetails);

        UserEntity user=new UserEntity(request.getUsername(),request.getMail());
        this.accountRepository.save(user);
    }
}
