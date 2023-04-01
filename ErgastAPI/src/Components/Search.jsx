import { useId } from 'react'

const Search = ({ placeholder, name, handleSubmit, handleChange }) => {

  const id = useId()

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className='search'>
      <label className='search__label' htmlFor={id}>{name}</label>
      <input className='search__input' id={id} placeholder={placeholder} />
    </form>
  )
}

export default Search