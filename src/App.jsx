import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import NotFound from './pages/NotFound'
import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'

/**--------------------------------------------------------------------------- App application function
 * 
 * @name App
 * 
 * @function
 * 
 * @returns contents for the complete application
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

function App () {

  // ------------------------- return

  return (

    <BrowserRouter>
      <div className="App">

        <h1>livingtheOKlife</h1>

        <HeaderContainer />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <FooterContainer />

      </div>
    </BrowserRouter>

  )
  
}

// --------------------------------------------------------------------------- App application export

export default App