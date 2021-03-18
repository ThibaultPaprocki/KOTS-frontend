package com.sigma.KOTSbackend.service;

import com.sigma.KOTSbackend.rest.model.UserRequest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AccountService {

    private BCryptPasswordEncoder newPassword;
    private JdbcUserDetailsManager jdbcUserDetailsManager;

    public AccountService(){
        this.newPassword = new BCryptPasswordEncoder();
        this.jdbcUserDetailsManager = new JdbcUserDetailsManager();
    }

    public void registerUser(UserRequest request){
        UserDetails userDetails = new User(request.getUsername(),newPassword.encode(request.getPassword()), List.of(new SimpleGrantedAuthority("USER")));
        this.jdbcUserDetailsManager.createUser(userDetails);
    }
}
