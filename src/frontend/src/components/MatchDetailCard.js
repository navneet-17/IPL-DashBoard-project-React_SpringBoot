import { React } from "react";
import { Link, NavLink } from "react-router-dom";

import "./MatchDetailCard.scss";

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
      }
    >
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.matchWinner} won by {match.resultMargin} {match.result}{" "}
        </h3>
      </div>
      <div className="additional-detail">
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man of the match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
};

// import React from "react";
// import { Link } from "react-router-dom";
// import "./MatchDetailCard.scss";

// export const MatchDetailCard = ({ teamName, match }) => {
//   if (!match) return null;
//   const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
//   const otherTeamLink = `/teams/${otherTeam}`;
//   const isMatchWon = teamName === match.matchWinner;
//   return (
//     <div
//       className={
//         isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
//       }
//     >
//       <div>
//         <h3 className="vs">vs</h3>
//         <h3>
//           <Link to={otherTeamLink}>{otherTeam}</Link>
//         </h3>
//         <p className="match-date">{match.date}</p>
//         <p className="match-venue">{match.venue}</p>
//         <p className="match-result">
//           {" " + match.matchWinner + " "}
//           won by {match.resultMargin} {" " + match.result}{" "}
//         </p>
//       </div>

//       <div className="additional-detail">
//         <div className="innings-details">
//           <p>First Innings :{" " + match.team1}</p>
//           <p>Second Innings: {" " + match.team2}</p>
//         </div>
//         <div className="people-details">
//           <p>Man of the Match : {match.playerOfMatch}</p>
//           <p>
//             Umpires:{" " + match.umpire1},{" " + match.umpire2}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
