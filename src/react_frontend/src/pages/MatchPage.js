import { React, useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { useParams, NavLink } from "react-router-dom";
import "./MatchPage.scss";
import { YearSelector } from "../components/YearSelector";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/teams/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  if (matches.length === 0)
    return (
      <h3>
        No Matches were found for {teamName} for the year {year}.
      </h3>
    );

  return (
    <div className="MatchPage">
      <NavLink to="/" style={{ color: "black" }}>
        Home
      </NavLink>
      <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches-list for the year {year}:
        </h1>
        {matches.map((match) => (
          <MatchDetailCard key={matches.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
