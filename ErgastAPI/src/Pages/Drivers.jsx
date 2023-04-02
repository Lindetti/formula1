import ".././scss/PagesFolder/Drivers.scss"
import { useState, useEffect } from "react";
import DriverImage from "../images/person.png"
//https://ergast.com/api/f1/current/drivers.json

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/driverStandings.json")
      .then((response) => response.json())
      .then((data) => {
        console.log( data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        driverStandings.sort((a, b) => a.position - b.position); // sort drivers based on position
        setDrivers(driverStandings);
      });
  }, []);

  const getTeamColor = (constructorName) => {
    switch (constructorName) {
    case "Mercedes":
    return "team-mercedes";
    case "Red Bull":
    return "team-redbull";
    case "Ferrari":
    return "team-ferrari";
    case "Aston Martin":
    return "team-astonmartin";
    case "Alfa Romeo":
    return "team-alfaromeo";
    case "Alpine F1 Team":
    return "team-alpine";
    case "Haas F1 Team":
    return "team-haas";
    case "Williams":
    return "team-williams";
    case "AlphaTauri":
    return "team-alphatauri";
    case "McLaren":
    return "team-mcLaren";
    default:
    return "team-default";
    }
  };


  const getTeamNumberColor = (constructorName) => {
    switch (constructorName) {
    case "Mercedes":
    return "mercedesTextColor";
    case "Red Bull":
    return "redbullTextColor";
    case "Ferrari":
    return "ferrariTextColor";
    case "Aston Martin":
    return "astonMartinTextColor";
    case "Alfa Romeo":
    return "alfaromeoTextColor";
    case "Alpine F1 Team":
    return "alpineTextColor";
    case "Haas F1 Team":
    return "haasTextColor";
    case "Williams":
    return "williamsTextColor";
    case "AlphaTauri":
    return "alphaTauriTextColor";
    case "McLaren":
    return "mclarenTextColor";
    default:
    return "defaultTextColor";
    }
  };


  return (
    <div className="driversDiv">
      {drivers.map((driver, key) => {
          const teamColor = getTeamColor(driver.Constructors[0].name);
          const teamTextColor = getTeamNumberColor(driver.Constructors[0].name);
        return (
          <div className="driver-card-item" key={key}>
            <div className="driverPoints">
            <div className="standing">
            <p>{driver.position}</p>
            </div>
            <div className="points">
            <p>{driver.points}</p>
            <p>Pts</p>
            </div>
            </div>

            <div className="driverNameDiv">
            <div className={`team ${teamColor}`}></div>
              <div className="driverName">
              <p className="firstName">{driver.Driver.givenName}</p>
            <p className="lastName">{driver.Driver.familyName}</p>
              </div>
            </div>

            <div className="driverConstructor">
              <p>{driver.Constructors[0].name}</p>
            </div>
            <div className="driverNumberAndImage">
            <div className={`driverNumber ${teamTextColor}`}> 
            <p>{driver.Driver.permanentNumber}</p>
            </div>
            <div className="driverImage">
            <img src={DriverImage} alt="Person" />
            </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Drivers;
