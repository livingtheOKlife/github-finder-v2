import MainContainer from '../components/layout/MainContainer'
import SearchBar from '../components/users/SearchBar'
import ResultsList from '../components/users/ResultsList'

/**--------------------------------------------------------------------------- Home page function
 * 
 * @name Home
 * 
 * @function
 * 
 * @returns contents of the '/' page
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function Home () {

  // ------------------------- return

  return (

    <MainContainer className='home'>

      <SearchBar />

      <ResultsList />
      
    </MainContainer>

  )

}

// --------------------------------------------------------------------------- Home page export

export default Home