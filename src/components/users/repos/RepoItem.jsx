import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItem ({ repo }) {

  return (

    <li>

      <a className='me' href={repo.html_url}>
        <FaLink /> {repo.name}
      </a>

      <p className="sm">{repo.description}</p>

      <div className="badges">

        <span className="badge green">
          <FaEye /> {repo.watchers_count}
        </span>

        <span className="badge orange">
          <FaStar /> {repo.stargazers_count}
        </span>

        <span className="badge red">
          <FaInfo /> {repo.open_issues}
        </span>

        <span className="badge purple">
          <FaUtensils /> {repo.forks}
        </span>

      </div>

    </li>

  )

}

RepoItem.propTypes = {

  repo: PropTypes.object.isRequired

}

export default RepoItem