import "./lastresults.css";
import { useEffect, useState } from "react";
//http://ergast.com/api/f1/current/last/results.json

const Results = () => {
  const [result, setResult] = useState([]);
  const [resultInfo, setResultInfo] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
      .then((response) => response.json())
      .then((data) => {
        const test = data.MRData.RaceTable.Races[0];
        console.log(test);
        setResult(data.MRData.RaceTable.Races[0].Results);
        setResultInfo(data.MRData.RaceTable.Races[0]);
      });
  }, []);

  return (
    <div className="results-wrapper">
    <div className="results-main">
<div className="tbl-header">
<table cellpadding="0" cellspacing="0" border="0">
<thead>
  <tr> 
  <th>Pos.</th>
  <th>Driver</th>
  <th>Constructor</th>
  <th>Laps</th>
  <th>Status</th>
  <th>Time</th>
  <th>Pts</th>
  </tr>
</thead>
</table>
</div>
<div className="tbl-content">
<table> 
<tbody>
{result.map(result => {
  return (
    <tr>
    <td>{result.position}</td>
    <td className="drivers">{result.Driver.familyName}</td>
    <td>{result.Constructor.name}</td>
    <td>{result.laps}</td>
    <td>{result.status}</td>
    <td>{result.Time ? result.Time.time : '-'}</td>
    <td>{result.points}</td>
    </tr>
  )
})}
</tbody>
</table>
</div>
    </div>
    </div>
  );
};

export default Results;
