package io.github.martinchoto.premier_league.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.client.RestClient;

@Configuration
public class ClientConfig {
    @Value("${football.api.key}")
    private String apiKey;
    @Bean
    public RestClient footballClient() {
        return RestClient.builder()
                .baseUrl("https://api.football-data.org/v4")
                .defaultHeader("X-Auth-Token", apiKey)
                .build();
    }
}