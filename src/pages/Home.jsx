import MainContainer from '../components/layout/MainContainer'
import ResultsList from '../components/users/ResultsList'

import { useEffect, useContext } from 'react'

import AlertContext from '../context/alert/AlertContext'

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

  const { setToastActive } = useContext(AlertContext)

  useEffect(() => {

    setToastActive('testing the toast', 'success')

  }, [])

  // ------------------------- return

  return (

    <MainContainer className='home'>

      <ResultsList />
      
    </MainContainer>

  )

}

// --------------------------------------------------------------------------- Home page export

export default Home