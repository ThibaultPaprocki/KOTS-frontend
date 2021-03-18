package com.sigma.KOTSbackend.repository;

import com.sigma.KOTSbackend.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<UserEntity, Long> {

}
