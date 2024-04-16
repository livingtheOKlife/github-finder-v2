import PropTypes from 'prop-types'
import { createContext } from 'react';

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

  // ------------------------- return
  
  return (

    <GithubContext.Provider value={{}}>

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