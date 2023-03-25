import "./pages.css";
import { useState, useEffect } from "react";
//https://ergast.com/api/f1/current/driverStandings.json
//https://ergast.com/api/f1/current/constructorStandings.json

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [driverStand, setDriverStand] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/driverStandings.json")
      .then((response) => response.json())
      .then((data) => {
        setStandings(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
      });

    fetch("https://ergast.com/api/f1/current/constructorStandings.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
        setDriverStand(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
      });
  }, []);
  return (
    <div className="standings">
      <div className="driverStandings">
        <h1>Driver Standings</h1>
        <table>
          <thead>
            <tr>
              <th className="tableHead">Pos</th>
              <th className="tableHead">Driver</th>
              <th className="tableHead">Points</th>
              <th className="tableHead">Wins</th>
            </tr>
          </thead>
          {standings.map((standings, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td className="pos">
                    <h2>{standings.position}</h2>
                  </td>
                  <td className="driver">
                    <h4>{standings.Driver.familyName.toUpperCase()} </h4>
                  </td>
                  <td className="points">
                    <p>{standings.points}</p>
                  </td>
                  <td className="wins">
                    <p>{standings.wins}</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="constructorStandings">
        <h1>Constructor Standings</h1>
        <table>
          <thead>
            <tr>
              <th className="tableHead">Pos</th>
              <th className="tableHead">Constuctor</th>
              <th className="tableHead">Points</th>
              <th className="tableHead">Wins</th>
            </tr>
          </thead>
          {driverStand.map((standings, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td className="pos">
                    <h2>{standings.position}</h2>
                  </td>
                  <td className="constructor">
                    <h4>{standings.Constructor.name.toUpperCase()} </h4>
                  </td>
                  <td className="points">
                    <p>{standings.points}</p>
                  </td>
                  <td className="wins">
                    <p>{standings.wins}</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Standings;
