package com.spring.Score;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/auth")
public class ScoresController {
    @Autowired
    private ScoresService service;

    @GetMapping("/display_score/{id}")
    public Scores display(@PathVariable("id") String id){
        return service.display(id);
    }

    @GetMapping("/display_scores")
    public List<Scores> displayScores(){

        return service.displayScores();
    }
//scores
    @PostMapping("/insert_scores")
    public Scores saveScore(@RequestBody Scores scores){
        System.out.println("Inserted");
        return service.save(scores);
    }
}



