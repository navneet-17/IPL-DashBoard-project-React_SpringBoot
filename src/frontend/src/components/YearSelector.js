import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";

export const YearSelector = ({ teamName }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = startYear; i <= endYear; i++) years.push(i);

  return (
    <ul className="YearSelector">
      {years.map((curYear) => (
        <li>
          <Link
            style={{ color: "black" }}
            to={`/teams/${teamName}/matches/${curYear}`}
          >
            {curYear}
          </Link>
        </li>
      ))}
    </ul>
  );
};
