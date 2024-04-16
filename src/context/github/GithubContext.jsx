import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

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

  // ------------------------- initialState
  
  const initialState = {
    users: [],
    loading: false
  }
  
  // ------------------------- reducer

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // ------------------------- return
  
  return (

    <GithubContext.Provider value={{
      ...state,
      dispatch,
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