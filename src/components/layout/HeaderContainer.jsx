import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

/**--------------------------------------------------------------------------- HeaderContainer component function
 * 
 * @name HeaderContainer
 * 
 * @function
 * 
 * @returns header#header-container
 * 
 * @author livingtheOKlife
 * 
 * @date 13 04.2024
 * 
 * -------------------------------------------------- */

function HeaderContainer () {

  // ------------------------- return

  return (

    <header id="header-container">

      <nav id="main-nav">

        <Link to='/'>
          <span>
            <FaGithub />
            Github Finder
          </span>
        </Link>

        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>

      </nav>
      
    </header>

  )

}

// --------------------------------------------------------------------------- HeaderContainer component export

export default HeaderContainer