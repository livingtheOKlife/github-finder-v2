const AlertReducder = (state, action) => {

  switch (action.type) {

    case 'SET_TOAST_ACTIVE':
      return action.payload

    case 'SET_TOAST_INACTIVE':
      return null

    default:
      return state

  }

}

export default AlertReducder