import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

/**--------------------------------------------------------------------------- SearchBar component function
 * 
 * @name SearchBar
 * 
 * @function
 * 
 * @returns a search bar for searching github for users
 * 
 * @author livingtheOKlife
 * 
 * @date 16.04.2024
 * 
 * -------------------------------------------------- */

function SearchBar () {

  // ------------------------- state

  const [text, setText] = useState('')

  // ------------------------- onChange

  const onChange = (e) => {

    setText(e.target.value)

  }

  // ------------------------- onSubmit

  const onSubmit = () => {}

  // ------------------------- return

  return (

    <form onSubmit={onSubmit}>

      <input type="text" id='text' value={text} placeholder='Username...' onChange={onChange} />

      <button type="submit" className="icon-btn btn-main" disabled={text.length === 0 ? true : false}>
        <FaSearch />
      </button>

    </form>

  )

}

// --------------------------------------------------------------------------- SearchBar component export

export default SearchBar