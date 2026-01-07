package io.github.martinchoto.premier_league.api.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class FootballHttpClient {

    private final RestClient restClient;

    public FootballHttpClient(RestClient restClient) {
        this.restClient = restClient;
    }

    public String fetchStandings(String leagueCode) {
        return restClient.get()
                .uri("/competitions/{league}/standings", leagueCode)
                .retrieve()
                .body(String.class);
    }
    
    public String fetchMatches(String leagueCode) {
        return restClient.get()
                .uri("/competitions/{league}/matches", leagueCode)
                .retrieve()
                .body(String.class);
    }
}