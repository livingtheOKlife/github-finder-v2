import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
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
  
  // ------------------------- context

  const { users, loading } = useContext(GithubContext)

  // ------------------------- return
  
  return (

    users === undefined && !loading ?

      <></>

    : loading ? 
      
      <Loading />

    : users.length === 0 ?
      
      <p className='empty'>No users to display...</p>

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