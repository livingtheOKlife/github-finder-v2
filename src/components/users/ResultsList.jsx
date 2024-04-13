import { useEffect, useState } from 'react'
import Loading from '../shared/Loading'
import ResultsItem from './ResultsItem'

/**--------------------------------------------------------------------------- ResultsList component function
 * 
 * @name ResultsList
 * 
 * @function
 * 
 * @returns ul that maps through the results yielded by searching
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function ResultsList () {

  // ------------------------- state

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  
  // ------------------------- side effects

  useEffect(() => {

    fetchUsers()

  }, [])

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

    loading ? 
      
      <Loading />

    : users.length === 0 ?
      
      <p className='no-users'>No users to display...</p>

    : <ul>

        {
          users.map((user) => (
            
            <ResultsItem user={user} key={user.login} />
            
          ))
        }

      </ul>

  )

}

// --------------------------------------------------------------------------- ResultsList component export

export default ResultsList