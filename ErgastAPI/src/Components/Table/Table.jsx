import React from 'react'
import Filter from '../Filter'

const Table = ({ stats }) => {

  const { Results, raceName, Circuit, date, season } = stats

  const calculateOvertakes = (grid, position) => {

    let overtake = grid - position
    let endedHigher = position > grid

    if (position !== grid){
      return (
        <div className={`table__overtake ${endedHigher ? 'table__overtake--up' : 'table__overtake--down'}`}>
          <span>{overtake}</span>
        </div>
      )
    }
  }
  
  return (
    <>
      <div className='flex-between'>
        <div className='track-info'>
          <h2 className='table__title'>Track information</h2>
          <p>Season: {season}</p>
          <p>Name: {raceName}</p>
          <p>Location: {Circuit.Location.locality}, {Circuit.Location.country}</p>
          <p>Date: {date}</p>
        </div>
        <Filter />
      </div>
      <div className='flex'>
        <div className='table__fastest'>+ 1</div>
        <span>&nbsp;- Fastest lap</span>
      </div>
      <table className='table'>
        <thead className='table__head'>
          <tr className='table__row'>
            <th className='table__item table__item-head'>Position</th>
            <th className='table__item table__item-head'>Started at</th>
            <th className='table__item table__item-head'>Number</th>
            <th className='table__item table__item-head'>Driver</th>
            <th className='table__item table__item-head'>Constructor</th>
            <th className='table__item table__item-head'>Laps</th>
            <th className='table__item table__item-head'>Time/Retired</th>
            <th className='table__item table__item-head'>Points</th>
          </tr>
        </thead>
        <tbody>
          {Results.map((stat) => (
            <tr className='table__row' key={stat.Driver.driverId}>
              <td className='table__item'>{stat.position}</td>
              <td className='table__item'>
                <div className='flex align-center'>
                  {stat.grid} {calculateOvertakes(stat.grid, stat.position)}
                </div>
              </td>
              <td className='table__item'>{stat.Driver.permanentNumber}</td>
              <td className='table__item table__item--bold flex'>
                {stat.Driver.givenName} {stat.Driver.familyName}
                {stat.FastestLap?.rank === "1" && <div className='table__fastest m-left'>+ 1</div>}</td>
              <td className='table__item table__item--bold'>{stat.Constructor.name}</td> 
              <td className='table__item table__item--bold'>{stat.laps}</td>
              <td className='table__item table__item--bold'>{stat.Time ? stat.Time.time : stat.status}</td>
              <td className='table__item table__item--bold'>{stat.points}</td>
              <td className='table__item table__item--bold'>{stat.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table