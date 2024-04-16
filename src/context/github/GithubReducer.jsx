const GithubReducer = (state, action) => {

  switch (action.type) {

    case 'SET_LOADING':
      return {
        loading: true
      }

    default:
      return state

  }

}

export default GithubReducer