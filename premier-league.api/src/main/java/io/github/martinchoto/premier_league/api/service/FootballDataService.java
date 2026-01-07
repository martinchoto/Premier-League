package io.github.martinchoto.premier_league.api.service;

import org.springframework.stereotype.Service; 
import org.springframework.beans.factory.annotation.Autowired;
import io.github.martinchoto.premier_league.api.client.FootballHttpClient;

@Service
public class FootballDataService {

    public FootballDataService(FootballHttpClient footballHttpClient){
        this.footballHttpClient = footballHttpClient;
    }

    @Autowired
    private FootballHttpClient footballHttpClient;

    public String getStandings() {

        return footballHttpClient.fetchStandings("PL");
    }
}