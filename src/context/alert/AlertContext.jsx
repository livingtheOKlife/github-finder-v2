import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react';
import AlertReducder from './AlertReducer';

const AlertContext = createContext()

/**--------------------------------------------------------------------------- AlertProvider provider function
 * 
 * @name AlertProvider
 * 
 * @function
 * 
 * @requires children PropTypes.node.isRequired
 * 
 * @returns alert context for the application
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

export function AlertProvider ({ children }) {

  // ------------------------- initialState

  const initialState = null
  
  // ------------------------- reducer

  const [state, dispatch] = useReducer(AlertReducder, initialState)

  const setToastActive = (msg, type) => {

    dispatch({
      type: 'SET_TOAST_ACTIVE',
      payload: {msg, type}
    })

    setTimeout(() => dispatch({ type: 'SET_TOAST_INACTIVE' }), 3640)

  }

  // ------------------------- return

  return (

    <AlertContext.Provider value={{
      toast: state,
      dispatch,
      setToastActive
    }}>

      {children}

    </AlertContext.Provider>

  )
  
}

// --------------------------------------------------------------------------- PropTypes

AlertProvider.propTypes = {

  children: PropTypes.node.isRequired

}

// --------------------------------------------------------------------------- AlertContext context export

export default AlertContext