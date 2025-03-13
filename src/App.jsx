import { Routes,Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Call from './pages/call'
import Speakers from './pages/speakers'
import Schedule from './pages/schedule'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/call' element={<Call/>}/>
        <Route path='/speakers' element={<Speakers/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;