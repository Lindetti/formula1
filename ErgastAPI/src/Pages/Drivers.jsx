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
      <h1>Drivers Current season</h1>
      {drivers.map((item) => {
        return (
          <div className="drivers">
            <h2>{item.permanentNumber}</h2>
            <a href="#">
              {" "}
              <p>
                {item.familyName} {item.givenName}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Drivers;
