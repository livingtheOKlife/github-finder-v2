import PropTypes from 'prop-types'
import { createContext, useState } from 'react';

const GithubContext = createContext()

/**--------------------------------------------------------------------------- GithubProvider provider function
 * 
 * @name GithubProvider
 * 
 * @function
 * 
 * @requires children PropTypes.node.isRequired
 * 
 * @returns github context for the application
 * 
 * @author livingtheOKlife
 * 
 * @date 16.04.2024
 * 
 * -------------------------------------------------- */

export function GithubProvider ({ children }) {

  // ------------------------- state

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // ------------------------- fetchUsers

  const fetchUsers = async () => {

    setLoading(true)

    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })

    const data = await res.json()

    setUsers(data)
    setLoading(false)

  }

  // ------------------------- return
  
  return (

    <GithubContext.Provider value={{
      users,
      setUsers,
      loading,
      setLoading,
      fetchUsers
    }}>

      {children}

    </GithubContext.Provider>

  )

}

// --------------------------------------------------------------------------- PropTypes

GithubProvider.propTypes = {

  children: PropTypes.node.isRequired

}

// --------------------------------------------------------------------------- GithubContext context export

export default GithubContext