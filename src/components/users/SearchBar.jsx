import { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import GithubContext from '../../context/github/GithubContext'
import { FaSearch } from 'react-icons/fa'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

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

  // ------------------------- searchUsers

  const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json()

    return data.items

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