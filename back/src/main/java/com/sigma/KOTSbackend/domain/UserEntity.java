package com.sigma.KOTSbackend.domain;

import javax.persistence.*;
import java.util.Optional;

@Entity
@Table(name = "user_account")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "mail")
    private String mail;

    public UserEntity(String username, String mail) {
        this.username = username;
        this.mail = mail;
    }

    public UserEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String password) {
        this.mail = mail;
    }

}
