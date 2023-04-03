import ".././scss/PagesFolder/Drivers.scss"
import { useState, useEffect } from "react";
import DriverImage from "../images/person.png"
import Modal from "../Components/Modal/Modal";
import testDriver from "../images/max_verstappen.png";
//https://ergast.com/api/f1/current/drivers.json

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Declare isModalOpen state variable
  
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

  const handleDriverClick = (driver) => {
    console.log("Driver clicked: ", driver);
    setSelectedDriver(driver);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDriver(null);
    setIsModalOpen(false);
  };

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
          <div className="driver-card-item" key={key} onClick={() => handleDriverClick(driver)}>
            <div className="driverPoints">
            <div className="standing">
            <h1>{driver.position}</h1>
            </div>
            <div className="points">
            <h2>{driver.points}</h2>
            <p className="pts">Pts</p>
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
            <img src={testDriver} alt="Person" />
            </div>
            </div>
          </div>
        )
      })}
{selectedDriver && (
  <Modal show={isModalOpen} handleClose={closeModal} url={selectedDriver.Driver.url}>
    <h2 className="infoName">{`${selectedDriver.Driver.givenName} ${selectedDriver.Driver.familyName}`}</h2>
    <div className="infoDiv">
      <div className="test"> 
    <p>Nationality: {selectedDriver.Driver.nationality}</p>
    <p>Birth: {selectedDriver.Driver.dateOfBirth} </p>
    <p>Current Position: {selectedDriver.position}</p>
    <p>Current Points: {selectedDriver.points} </p>
    <p>Team: {selectedDriver.Constructors[0].name}</p>
    </div>
    </div>
  </Modal>
)}
    </div>
  );
};

export default Drivers;
