import PropTypes from 'prop-types'

function RepoList ({ repos }) {

  return (

    <ul>

      {
        repos.map((user) => (
          <li>RepoItem</li>
        ))
      }
      
    </ul>

  )

}

RepoList.propTypes = {

  repos: PropTypes.array.isRequired

}

export default RepoList