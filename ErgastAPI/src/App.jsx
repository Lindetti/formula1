import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Drivers from "./Pages/Drivers";
import Standings from "./Pages/Standings";
import Results from "./Pages/LastResult";
import NotFound from "./pages/404";
//https://ergast.com/api/f1/2023/2/drivers.json
//https://ergast.com/api/f1/current.json // schedule

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/standings" element={<Standings />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/drivers" element={<Drivers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
