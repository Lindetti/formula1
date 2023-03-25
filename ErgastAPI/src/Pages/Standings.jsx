import "./pages.css";
import { useState, useEffect } from "react";
//https://ergast.com/api/f1/current/driverStandings.json

const Standings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/driverStandings.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
        setStandings(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
      });
  }, [0]);
  return (
    <div className="standings">
      <h1>Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Points</th>
            <th>Wins</th>
          </tr>
        </thead>
        {standings.map((standings) => {
          return (
            <tbody>
              <tr>
                <td>
                  {standings.Driver.givenName} {standings.Driver.familyName} -{" "}
                  {standings.Driver.code}
                </td>
                <td>{standings.points}</td>
                <td>{standings.wins}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Standings;
