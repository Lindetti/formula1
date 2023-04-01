import "./standings.css";
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
    <div className="container">
      <section>
        <h1>Standings</h1>
        Standings for Drivers
      </section>
    </div>
  );
};

export default Standings;
