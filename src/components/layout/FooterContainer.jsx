/**--------------------------------------------------------------------------- FooterContainer component function
 * 
 * @name FooterContainer
 * 
 * @function
 * 
 * @returns footer#footer-container
 * 
 * @author livingtheOKlife
 * 
 * @date 13 04.2024
 * 
 * -------------------------------------------------- */

function FooterContainer () {

  // ------------------------- year variable

  const year = new Date().getFullYear()

  // ------------------------- return

  return (

    <footer id="footer-container">

      <p className="sm"><span className="brand">livingthe<em>OK</em>life</span></p>
      <p className="copyright">Copyright &copy; {year} All Rights Reserved</p>

    </footer>

  )

}

// --------------------------------------------------------------------------- FooterContainer component export

export default FooterContainer