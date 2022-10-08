package com.spring.mcq;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface McqRepository extends JpaRepository<Mcq,String> {

}
