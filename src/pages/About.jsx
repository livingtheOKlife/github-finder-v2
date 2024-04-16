import MainContainer from '../components/layout/MainContainer'

/**--------------------------------------------------------------------------- About page function
 * 
 * @name About
 * 
 * @function
 * 
 * @returns contents of the '/about' page
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function About () {

  // ------------------------- return

  return (

    <MainContainer className='about'>
      <h2>Github Finder</h2>
      <p className='xs'>Version 1.0.0</p>
      <p className='sm'>A React app to search Github profiles and see profile details. This project is part of the <a className='sm' href="https://www.udemy.com/course/react-front-to-back-2022/">React Front to Back</a> Udemy course by <a className='sm' href="https://traversymedia.com">Brad Traversy.</a></p>
      <p className='sm'>In the course, <a className='sm' href="https://traversymedia.com">Brad Traversy</a> uses layouts and styles created by <a className='sm' href="https://twitter.com/hassibmoddasser">Hassib Moddasser</a>. They chose to use Tailwind to make styling their application quicker and easier. However, I have been building a SASS library of my own called OKSS. So I decided to trial my own library here instead.</p>
    </MainContainer>

  )

}

// --------------------------------------------------------------------------- About page export

export default About