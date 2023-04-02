import { useId } from 'react'

const Filter = () => {

  const whofinished = useId()
  const top10 = useId()

  return (
    <div className='filter'>
      <h2 className='filter__title'>Filter</h2>
      <div className='filter__item'>
        <input type="checkbox" id={whofinished} name="finished" value="finished" />
        <span className='checkmark'></span>
        <label htmlFor={whofinished}>Players who finished</label>
      </div>
      <div className='filter__item'>
        <input type="checkbox" id={top10} name="top10" value="top10" />
        <span className='checkmark'></span>
        <label htmlFor={top10}>Top 10</label>
      </div>
    </div>
  )
}

export default Filter