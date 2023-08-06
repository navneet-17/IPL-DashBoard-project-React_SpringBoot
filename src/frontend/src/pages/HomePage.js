import React, { useEffect, useState } from "react";

import { TeamTile } from "../components/TeamTile";
import "./HomePage.scss";

export const HomePage = () => {
  const [teamList, setTeamList] = useState([]);
  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch("http://localhost:8080/teams");
      const data = await response.json();
      console.log(data);
      setTeamList(data);
    };
    fetchTeams();
  }, []);
  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL DashBoard</h1>
      </div>
      <div className="team-grid">
        {teamList.map((team) => (
          <TeamTile teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};

{
  /* <ul className="TeamList">
          {teamList.map((teams) => (
            <li>
              <Link style={{ color: "black" }} to={`/teams/${teams.teamName}`}>
                {teams.teamName}
              </Link>
            </li>
          ))}
        </ul> */
}
