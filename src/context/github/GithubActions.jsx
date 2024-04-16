const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })

  const data = await response.json()

  return data.items

}

export const getUserAndRepos = async (login) => {

  const userReponse = await fetch(`${GITHUB_URL}/users/${login}`)
  const reposReponse = await fetch(`${GITHUB_URL}/users/${login}/repos`)

  const user = await userReponse.json()
  const repos = await reposReponse.json()

  return {
    user: user,
    repos: repos
  }

}