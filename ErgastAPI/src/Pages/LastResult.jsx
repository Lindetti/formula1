import "./Pages.css";
import { useEffect, useState } from "react";
//http://ergast.com/api/f1/current/last/results.json

const Results = () => {
  const [result, setResult] = useState([]);
  const [color, setColor] = useState("green");

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
    <div className="resultsDiv">
      <div className="results">
        <h1>Last Results</h1>
        <table className="resultsTable">
          <thead>
            <tr>
              <th className="tableHead">Pos</th>
              <th className="tableHead">Driver</th>
              <th className="tableHead">Laps</th>
              <th className="tableHead">Grid</th>
              <th className="tableHead">Time</th>
              <th className="tableHead">Status</th>
              <th className="tableHead">Points</th>
            </tr>
          </thead>
          {result.map((item, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td className="pos">
                    <h2> {item.position}</h2>
                  </td>
                  <td className="innerResults">
                    <h4>{item.Driver.code}</h4>
                  </td>
                  <td className="resultsStandard">{item.laps}</td>
                  <td className="resultsStandard">{item.grid}</td>
                  <td className="resultsStandard">{item.time}</td>
                  <td className="resultsStandard">{item.status}</td>
                  <td className="innerResults">{item.points}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Results;
