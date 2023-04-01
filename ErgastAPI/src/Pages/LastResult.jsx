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
    <div className="resultsDiv">
 
<h1>Last results</h1>
    </div>
  );
};

export default Results;
