import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Drivers from "./Pages/Drivers";
import Standings from "./Pages/Standings";
import Results from "./Pages/LastResult";
import NotFound from "./pages/404";
//https://ergast.com/api/f1/2023/2/drivers.json
//https://ergast.com/api/f1/current.json // schedule

function App() {
  /*   const [standings, setStandings] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.MRData.RaceTable.Races);
        setSchedule(data.MRData.RaceTable.Races);
      });
  }, [0]);
 */
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/standings" element={<Standings />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/drivers" element={<Drivers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*      {standings.map((race, key) => {
        return (
          <div key={key}>
            <p>
              Driver: {race.givenName} {race.familyName} | {race.code} |
              DriverNumber: {race.permanentNumber} | Nationality:{" "}
              {race.nationality}
            </p>
          </div>
        );
      })} */}

      {/*     {schedule.map((schedule) => {
        return (
          <div>
            <h2>
              Season: {schedule.season} - {schedule.raceName} - Round{" "}
              {schedule.round}{" "}
            </h2>
            <p>{schedule.Circuit.circuitName}</p>
            <p>
              Date: {schedule.date} - {schedule.time}
            </p>
            <ul>
              <li>
                First Practice: {schedule.FirstPractice.date} -{" "}
                {schedule.FirstPractice.time}
              </li>
              <li>
                Second Practice: {schedule.SecondPractice.date} -
                {schedule.SecondPractice.time}{" "}
              </li>
              <li>
                Qualifying: {schedule.Qualifying.date} -{" "}
                {schedule.Qualifying.time}
              </li>
            </ul>
            <p>URL: {schedule.url}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
