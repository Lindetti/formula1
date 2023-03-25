import "./Pages.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.MRData.RaceTable.Races);
        setSchedule(data.MRData.RaceTable.Races);
      });
  }, [0]);

  return (
    <div className="home">
      <table>
        <thead>
          <tr>
            <th>Season - Round</th>
            <th>Qualifying</th>
            <th>Raceday</th>
          </tr>
        </thead>
        {schedule.map((schedule) => {
          return (
            <tbody>
              <tr>
                <td>
                  {schedule.season} - Round: {schedule.round}
                  <br />
                  <em>
                    {schedule.Circuit.Location.country}{" "}
                    {schedule.Circuit.Location.locality}
                  </em>
                </td>
                <td>
                  {schedule.Qualifying.date} - {schedule.Qualifying.time}
                </td>
                <td>
                  {schedule.raceName}
                  <br />
                  <em>
                    {schedule.date} - {schedule.time}
                  </em>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Home;
