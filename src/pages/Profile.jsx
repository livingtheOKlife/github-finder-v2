import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { getUserAndRepos } from '../context/github/GithubActions'
import MainContainer from '../components/layout/MainContainer'
import Loading from '../components/shared/Loading'
import RepoList from '../components/users/repos/RepoList'
import { FaUsers, FaUserFriends, FaCode, FaStore } from 'react-icons/fa'

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

    }

    getUserData()

    
  }, [dispatch, params.login])

  // ------------------------- return

  return (

    user === undefined && !loading ?

      <></>

    : loading ? <Loading />

    : <MainContainer className='profile'>

        <section className="control">
          <Link to='/' className='btn btn-ghost'>Return to Search</Link>
        </section>

        <section className="user">

          <div className="avatar">

            <img src={user.avatar_url} alt={`${user.login}'s profile`} />

            <div className="overlay">

              <p className="xl">{user.login}</p>
              <p className="me">{user.name}</p>

            </div>

          </div>

          <div className="details">

            <h2>{user.name}</h2>

            <div className="badges">

              <span className="badge blue">user</span>
              
              {
                user.hireable && <span className="badge green">hireable</span>
              }

            </div>

            <p className="sm bio">{user.bio}</p>

            <a href={user.html_url} className="btn btn-main">Visit Github Profile</a>

          </div>

        </section>

        <section className="details-bar title-value">

          {
            user.location &&
            <div className="detail">
              <p className="la">Location</p>
              <p className="sm">{user.location}</p>
            </div>
          }

          {
            user.blog &&
            <div className="detail">
              <p className="la">Website</p>
              <p className="sm">{user.blog}</p>
            </div>
          }

          {
            user.twitter_username &&
            <div className="detail">
              <p className="la">Twitter</p>
              <a className="sm" href={`https://twitter.com/${user.twitter_username}`} target='_blank' rel='noreferrer'>{user.twitter_username}</a>
            </div>
          }

        </section>

        <section className="details-bar icon-title-value">

          <div className="detail">
            <FaUserFriends />
            <p className="xs">Followers</p>
            <p className="xl">{user.followers}</p>
          </div>

          <div className="detail">
            <FaUsers />
            <p className="xs">Following</p>
            <p className="xl">{user.following}</p>
          </div>

          <div className="detail">
            <FaCode />
            <p className="xs">Public Repos</p>
            <p className="xl">{user.public_repos}</p>
          </div>

          <div className="detail">
            <FaStore />
            <p className="xs">Public Gists</p>
            <p className="xl">{user.public_gists}</p>
          </div>

        </section>

        <section className="repos">

          {
            repos === undefined || repos.length === 0 ?
              
              <p className="empty">No repos to display...</p>
            
            : <>
                <h3>Latest Repositories</h3>
                <RepoList repos={repos} />
              </>
          }

        </section>

      </MainContainer>

  )

}

// --------------------------------------------------------------------------- Profile page export

export default Profile