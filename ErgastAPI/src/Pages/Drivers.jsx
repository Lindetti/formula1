import "./pages.css";
import { useState, useEffect } from "react";
//https://ergast.com/api/f1/current/drivers.json

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/drivers.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.MRData.DriverTable.Drivers);
        setDrivers(data.MRData.DriverTable.Drivers);
      });
  }, []);
  return (
    <div className="driversDiv">
  <h1>Drivers</h1>
    </div>
  );
};

export default Drivers;
