import PropTypes from 'prop-types'

/**--------------------------------------------------------------------------- MainContainer component function
 * 
 * @name MainContainer
 * 
 * @function
 * 
 * @requires className PropTypes.string.isRequired
 * @requires children PropTypes.node.isRequired
 * 
 * @returns main#main-container
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function MainContainer ({ className, children }) {

  // ------------------------- return

  return (

    <main id="main-container" className={className}>

      {children}

    </main>

  )

}

// --------------------------------------------------------------------------- PropTypes

MainContainer.propTypes = {

  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired

}

// --------------------------------------------------------------------------- MainContainer component export

export default MainContainer