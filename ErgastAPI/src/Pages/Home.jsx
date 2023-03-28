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
    <div className="homeDiv">
      <div className="home">
        <table>
          <thead>
            <tr>
              <th className="tableHead">Round</th>
              <th className="tableHead">Qualifying</th>
              <th className="tableHead">Race Day</th>
            </tr>
          </thead>
          {schedule.map((schedule, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td className="round">
                    <h2> R{schedule.round} </h2>
                  </td>
                  <td className="qualifying">
                    {schedule.Qualifying.date}
                    <br />
                    {schedule.Qualifying.time}
                  </td>
                  <td className="race">
                    <p>{schedule.raceName}</p>
                    <h2>{schedule.Circuit.Location.country} </h2>
                    <em>
                      {" "}
                      {schedule.date} - {schedule.time}
                    </em>
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

export default Home;
