const GithubReducer = (state, action) => {

  switch (action.type) {

    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case 'SET_LOADING':
      return {
        loading: true
      }

    default:
      return state

  }

}

export default GithubReducer