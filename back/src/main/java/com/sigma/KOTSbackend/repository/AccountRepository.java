package com.sigma.KOTSbackend.repository;

import com.sigma.KOTSbackend.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}
