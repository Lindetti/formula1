import "./home.css";
import { useState, useEffect } from "react";
import { CircleFlag } from 'react-circle-flags'

const Home = () => {
  const [schedule, setSchedule] = useState([]);
  const [season, setSeason] = useState("");
  const [upcomingRace, setUpcomingRace] = useState({});

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.MRData.RaceTable.Races);
        setSchedule(data.MRData.RaceTable.Races);
        setSeason(data.MRData.RaceTable.Races[0]);
      });
  }, [0]);

  useEffect(() => {
    const upcoming = schedule.find((race) => new Date(race.date) > new Date());
    setUpcomingRace(upcoming);
  }, [schedule]);


  const firstHalf = schedule.slice(0, 11);
  const secondHalf = schedule.slice(11, 23)

  const getCountryCode = (country) => {
    switch (country) {
      case "Bahrain":
        return "BH";
      case "Saudi Arabia":
        return "SA";
      case "Australia":
        return "AU";
      case "Azerbaijan":
        return "AZ";
      case "USA":
        return "US";
      case "Italy":
        return "IT";
      case "Monaco":
        return "MC";
      case "Spain":
        return "ES";
      case "Canada":
        return "CA";
      case "Austria":
        return "AT";
      case "UK":
        return "GB";
      case "Hungary":
        return "HU";
      case "Belgium":
        return "BE";
      case "Netherlands":
        return "NL";
      case "Singapore":
        return "SG";
      case "Japan":
        return "JP";
      case "Qatar":
        return "QA";
      case "Mexico":
        return "MX";
      case "Brazil":
        return "BR";
      case "United States":
        return "US";
      case "Abu Dhabi Grand Prix":
        return "AE";
      case "UAE":
        return "AE";
      default:
        return "";
    }
  };

  console.log(getCountryCode())

  return (
    <div className="home-wrapper">
 <div className="season-header">
  <h2>Season {season.season}</h2>
        {upcomingRace && (
          <h2>Next race:  {upcomingRace.raceName} - {upcomingRace.date}</h2>
        )}
      </div>
      <div className="schedule-wrapper">
      <div className="schedule-column1">
          {firstHalf.map((schedule) => {
            const countryCode = getCountryCode(schedule.Circuit.Location.country);
            console.log(schedule.Circuit.Location.country, countryCode)
            return (
              <div className="mapped-divs" key={schedule.round}>
            <h2>R: {schedule.round}</h2>
                <p>{schedule.raceName}</p>
                <div className="countryDiv">
                <CircleFlag countryCode={countryCode.toLowerCase()} width={50} height={50} />
                    <h2 className="country">{schedule.Circuit.Location.country}</h2>
  </div>  
                <p>Date: {schedule.date}</p>
              </div>
            );
          })}
        </div>
        <div className="schedule-column2">
          {secondHalf.map((schedule) => {
                const countryCode = getCountryCode(schedule.Circuit.Location.country);
            return (
              <div className="mapped-divs" key={schedule.round}>
                <h2>R: {schedule.round}</h2>
                <p>{schedule.raceName}</p>
                <div className="countryDiv">
                <CircleFlag countryCode={countryCode.toLowerCase()} width={50} height={50} />
              <h2 className="country">{schedule.Circuit.Location.country}</h2>
  </div>
                <p>Date: {schedule.date}</p>
              </div>
            );
          })}
        </div>
      </div>
 
    </div>
  );
};

export default Home;

