import "./home.css";
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
    <div className="newDiv">
      <div className="info">
        <p>Schedule</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Qualifying</th>
            <th>RaceDay</th>
          </tr>
        </thead>
        {schedule.map((schedule, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td>
                  <h2> R{schedule.round}</h2>
                </td>
                <td>
                  <h4>{schedule.date}</h4>
                </td>
                <td>{schedule.raceName}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Home;

// R{schedule.round}
{
  /* <p>{schedule.Circuit.Location.country} </p>
<p>{schedule.raceName}</p>
<p>{schedule.date}</p> */
}
