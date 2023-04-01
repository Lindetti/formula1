import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Standings from "./pages/Standings";
import Results from "./pages/LastResult";
import NotFound from "./pages/404";
//https://ergast.com/api/f1/2023/2/drivers.json
//https://ergast.com/api/f1/current.json // schedule

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/results" element={<Results />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
