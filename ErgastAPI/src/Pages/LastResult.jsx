import "./Pages.css";
import { useEffect, useState } from "react";
//http://ergast.com/api/f1/current/last/results.json

const Results = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
      .then((response) => response.json())
      .then((data) => {
        const test = data.MRData.RaceTable.Races[0].Results;
        console.log(test);
        setResult(data.MRData.RaceTable.Races[0].Results);
      });
  }, []);

  return (
    <div className="results">
      <h1>Last Results</h1>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Laps</th>
            <th>Grid</th>
            <th>Time</th>
            <th>Status</th>
            <th>Points</th>
          </tr>
        </thead>
        {result.map((item, key) => {
          return (
            <tbody>
              <tr key={key}>
                <td>{item.position}</td>
                <td>{item.Driver.code}</td>
                <td>{item.Constructor.name}</td>
                <td>{item.laps}</td>
                <td>{item.grid}</td>
                <td>{item.time}</td>
                <td>{item.status}</td>
                <td>{item.points}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Results;
