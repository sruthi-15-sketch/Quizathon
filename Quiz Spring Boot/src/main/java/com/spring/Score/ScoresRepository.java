package com.spring.Score;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoresRepository extends JpaRepository<Scores,String> {
}
