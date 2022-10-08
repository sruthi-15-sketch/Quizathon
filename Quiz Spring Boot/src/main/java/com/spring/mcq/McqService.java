package com.spring.mcq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class McqService {
    @Autowired
    private McqRepository repo;

    public McqService(McqRepository repo) {
        this.repo = repo;
    }

    public Mcq display(String id) {
        return repo.findById(id).get();
    }

    public List<Mcq> displayQuestions() {
        return repo.findAll();
    }
}
