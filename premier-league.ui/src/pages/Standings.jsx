import React, { useEffect, useState } from "react";
import "./Standings.css";

const Standings = () => {
  const [standings, setStandings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/standings")
      .then((response) => response.json())
      .then((data) => {
        setStandings(data.standings[0].table);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching standings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading standings...</p>;

  return (
    <div className="standings-view">
      <div className="standings-header-main">
        <div className="title-section">
          <h1>Premier League Table</h1>
          <div className="season-badge">Season 2025/26</div>
        </div>
      </div>

      <div className="glass-table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th className="col-rank">Pos</th>
              <th className="col-team">Club</th>
              <th>Pl</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th className="col-pts">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((club) => (
              <tr
                key={club.team.id}
                className={`table-row 
    ${club.position <= 4 ? "ucl-zone" : ""} 
    ${club.position >= 18 ? "relegation-zone" : ""}
    ${club.position == 5 ? "europa-league-zone" : ""}`}
              >
                <td className="rank-cell">
                  <span className="rank-number">{club.position}</span>
                </td>
                <td className="team-cell">
                  <div className="team-info">
                    <img
                      src={club.team.crest} 
                      alt={club.team.name}
                      className="club-icon"
                    />
                    <span className="club-name">
                      {club.team.shortName || club.team.name}
                    </span>
                  </div>
                </td>
                <td className="stat-cell">{club.playedGames}</td>
                <td className="stat-cell">{club.won}</td>
                <td className="stat-cell">{club.draw}</td>
                <td className="stat-cell">{club.lost}</td>
                <td className="stat-cell gd-cell">
                  {club.goalDifference > 0
                    ? `+${club.goalDifference}`
                    : club.goalDifference}
                </td>
                <td className="pts-cell">{club.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;
