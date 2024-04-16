import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { getUserAndRepos } from '../context/github/GithubActions'
import MainContainer from '../components/layout/MainContainer'
import Loading from '../components/shared/Loading'

/**--------------------------------------------------------------------------- Profile page function
 * 
 * @name Profile
 * 
 * @function
 * 
 * @returns contents of the '/profile' page
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function Profile () {

  // ------------------------- context

  const { user, repos, loading, dispatch } = useContext(GithubContext)

  // ------------------------- params

  const params = useParams()

  // ------------------------- side effects

  useEffect(() => {

    dispatch({type: 'SET_LOADING'})
    const getUserData = async () => {

      const userData = await getUserAndRepos(params.login)
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
      console.log(userData)

    }

    getUserData()

    
  }, [dispatch, params.login])

  // ------------------------- return

  return (

    loading ? <Loading />

    : <MainContainer className='profile'>MainContainer - {user.login} page</MainContainer>

  )

}

// --------------------------------------------------------------------------- Profile page export

export default Profile