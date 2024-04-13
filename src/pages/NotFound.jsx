import { Link } from 'react-router-dom'
import MainContainer from '../components/layout/MainContainer'

/**--------------------------------------------------------------------------- NotFound page function
 * 
 * @name NotFound
 * 
 * @function
 * 
 * @returns contents of the '/not-found' and '/*' pages
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function NotFound () {

  // ------------------------- return

  return (

    <MainContainer className='not-found'>
      <h2>Oops!</h2>
      <p className='la'>Page not found!</p>
      <Link to='/' className='btn btn-main'>Return Home</Link>
    </MainContainer>

  )

}

// --------------------------------------------------------------------------- NotFound page export

export default NotFound