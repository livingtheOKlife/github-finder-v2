import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**--------------------------------------------------------------------------- ResultsItem component function
 * 
 * @name ResultsItem
 * 
 * @function
 * 
 * @requires user PropTypes.object.isRequired
 * 
 * @returns li to be populated with details yielded by search
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function ResultsItem ({ user }) {

  // ------------------------- return

  return (

    <li>

      <img src={user.avatar_url} alt={`${user.login} profile`} />

      <div className="text-box">
        <p className="me">{user.login}</p>
        <Link to={`/profile/${user.login}`}>Visit Profile</Link>
      </div>

    </li>

  )

}

// --------------------------------------------------------------------------- PropTypes

ResultsItem.propTypes = {

  user: PropTypes.object.isRequired

}

// --------------------------------------------------------------------------- ResultsItem component export

export default ResultsItem