package io.github.martinchoto.premier_league.api.controller;

import io.github.martinchoto.premier_league.api.service.FootballDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class FootballDataController {
    @Autowired
    private FootballDataService footballDataService;
    
    public FootballDataController(FootballDataService footballDataService){
        this.footballDataService = footballDataService;
    }
    

    @GetMapping("/standings")
    public String getStandings() {
        return footballDataService.getStandings();
    }
}