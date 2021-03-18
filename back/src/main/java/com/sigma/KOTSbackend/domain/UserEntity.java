package com.sigma.KOTSbackend.domain;

import javax.persistence.*;

@Entity
@Table(name = "UserAccount")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUser")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    public UserEntity(int id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String password) {
        this.email = password;
    }
}
