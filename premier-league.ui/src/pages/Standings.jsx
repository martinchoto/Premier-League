import React from "react";
import "./Standings.css";

const Standings = () => {
  const decemberData = [
    {
      rank: 1,
      team: "Liverpool",
      p: 18,
      w: 13,
      d: 4,
      l: 1,
      gd: 24,
      pts: 43,
      form: ["W", "W", "D", "W", "W"],
    },
    {
      rank: 2,
      team: "Arsenal",
      p: 18,
      w: 12,
      d: 4,
      l: 2,
      gd: 20,
      pts: 40,
      form: ["L", "W", "W", "D", "W"],
    },
    {
      rank: 3,
      team: "Manchester City",
      p: 18,
      w: 11,
      d: 5,
      l: 2,
      gd: 22,
      pts: 38,
      form: ["W", "D", "W", "W", "L"],
    },
    {
      rank: 4,
      team: "Aston Villa",
      p: 19,
      w: 11,
      d: 3,
      l: 5,
      gd: 11,
      pts: 36,
      form: ["W", "W", "L", "W", "D"],
    },
    {
      rank: 5,
      team: "Tottenham",
      p: 19,
      w: 10,
      d: 3,
      l: 6,
      gd: 9,
      pts: 33,
      form: ["L", "L", "W", "D", "W"],
    },
  ];

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
              <th className="col-form">Form</th>
            </tr>
          </thead>
          <tbody>
            {decemberData.map((club) => (
              <tr key={club.rank} className={`table-row row-rank-${club.rank}`}>
                <td className="rank-cell">
                  <span className="rank-number">{club.rank}</span>
                </td>
                <td className="team-cell">
                  <div className="team-info">
                    {/* Using the path relative to the public folder or absolute asset path */}
                    <img src="/pl_table.svg" alt="" className="club-icon" />
                    <span className="club-name">{club.team}</span>
                  </div>
                </td>
                <td className="stat-cell">{club.p}</td>
                <td className="stat-cell">{club.w}</td>
                <td className="stat-cell">{club.d}</td>
                <td className="stat-cell">{club.l}</td>
                <td className="stat-cell gd-cell">
                  {club.gd > 0 ? `+${club.gd}` : club.gd}
                </td>
                <td className="pts-cell">{club.pts}</td>
                <td className="form-cell">
                  <div className="form-indicator-group">
                    {club.form.map((res, i) => (
                      <span key={i} className={`form-dot ${res.toLowerCase()}`}>
                        {res}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;
