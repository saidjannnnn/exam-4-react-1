import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Catalog from './Pages/Catalog'
import Info from './Pages/Info'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/info/:id' element={<Info />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
