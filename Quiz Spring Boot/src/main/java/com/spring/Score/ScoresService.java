package com.spring.Score;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ScoresService {
    @Autowired
    private ScoresRepository repo;

    public ScoresService(ScoresRepository repo) {
        this.repo = repo;
    }

    public Scores display(String id) {
        return repo.findById(id).get();
    }

    public List<Scores> displayScores() {
        return repo.findAll();
    }

    public Scores save(Scores scores) {
        return repo.save(scores);
    }
}
