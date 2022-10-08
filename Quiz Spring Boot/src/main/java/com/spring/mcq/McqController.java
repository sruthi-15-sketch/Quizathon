package com.spring.mcq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/auth/mcq")
public class McqController {
    @Autowired
    private McqService service;

    public McqController(McqService service) {
        this.service = service;
    }
    @GetMapping("/display_question/{id}")
    public Mcq display(@PathVariable("id") String id){
        return service.display(id);
    }
    @GetMapping("/display_questions")
    public List<Mcq> displayQuestions(){
        return service.displayQuestions();
    }
}
