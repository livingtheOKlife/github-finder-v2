import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList ({ repos }) {

  return (

    <ul>

      {
        repos.map((repo) => (
          <RepoItem repo={repo} key={repo.name}/>
        ))
      }
      
    </ul>

  )

}

RepoList.propTypes = {

  repos: PropTypes.array.isRequired

}

export default RepoList