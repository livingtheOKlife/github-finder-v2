import { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import GithubContext from '../../context/github/GithubContext'
import { searchUsers } from '../../context/github/GithubActions'
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

  // ------------------------- context

  const { setToastActive } = useContext(AlertContext)
  const { dispatch } = useContext(GithubContext)

  // ------------------------- state

  const [text, setText] = useState('')

  // ------------------------- onChange

  const onChange = (e) => {

    setText(e.target.value)

  }

  // ------------------------- onSubmit

  const onSubmit = async (e) => {

    e.preventDefault()

    if (text.length === 0) {

      setToastActive('Please enter a value username', 'error')

    } else {

      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type: 'SEARCH_USERS', payload: users})

      setText('')

    }

  }

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