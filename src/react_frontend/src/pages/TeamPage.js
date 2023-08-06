import { useParams, NavLink } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const [color, setColor] = useState("");
  const { teamName } = useParams();
  //create the team and color combination
  let map = {}; // create an empty object
  map["Chennai Super Kings"] = "#ffdd00";
  map["Mumbai Indians"] = "#1273de";
  map["Rajasthan Royals"] = "#ff00b0";
  map["Royal Challengers Bangalore"] = "#dd1b1f";
  map["Sunrisers Hyderabad"] = "#ff5400";
  map["Kings XI Punjab"] = "#E6080C";
  map["Kolkata Knight Riders"] = "#7940bf";
  map["Kochi Tuskers Kerala"] = "#ff8100";
  map["Gujarat Lions"] = "#ff8a00";
  map["Rising Pune Supergiants"] = "#00E6FF";
  map["Pune Warriors"] = "#00E6FF";
  map["Delhi Capitals"] = "#002BFF";

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/teams/${teamName}`);
      const data = await response.json();
      setTeam(data);
    };
    fetchMatches();
    setColor(map[teamName]);
    // document.body.style.background = color;
  }, [teamName]);
  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="TeamPage">
      <NavLink to="/" style={{ color: "black" }}>
        Home
      </NavLink>
      <div className="team-name-section" style={{ backgroundColor: color }}>
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses{" "}
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#f31b4367",
            },
            { title: "Wins", value: team.totalWins, color: "#18db7343" },
          ]}
          label={({ dataEntry }) => dataEntry.value}
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard teamName={team.teamName} match={match} />
      ))}
      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More Matches {">"}
        </Link>
      </div>
    </div>
  );
};
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { MatchDetailCard } from "../components/MatchDetailCard";
// import { MatchSmallCard } from "../components/MatchSmallCard";
// import "./TeamPage.scss";

// export const TeamPage = () => {
//   const [team, setTeam] = useState({ matches: [] });
//   const { teamName } = useParams();

//   useEffect(() => {
//     const fetchMatches = async () => {
//       const response = await fetch(`http://localhost:8080/teams/${teamName}`);
//       const data = await response.json();
//       console.log(data);
//       setTeam(data);
//     };
//     fetchMatches();
//   }, [teamName]);

//   if (!team || !team.teamName) return <h1>Team is Not Found.</h1>;

//   return (
//     <div className="TeamPage">
//       <div className="team-name-section">
//         <h1 className="team-name">{team.teamName}</h1>
//       </div>
//       {/* <div className="recent-matches-section">
//         <h2>Recent Matches</h2>
//       </div> */}
//       <div className="win-loss-section"> Wins / Losses </div>

//       <div className="match-details-section">
//         <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
//       </div>

//       {team.matches.slice(1).map((match) => (
//         <MatchSmallCard teamName={team.teamName} match={match} />
//       ))}

//       <div className="more-matches">
//         <a href="#">more matches</a>
//       </div>
//     </div>
//   );
// };
