import { useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {
  const [playState, setPlayState] = useState(false)
  const aboutRef = useRef()

  const scrollToAbout = ()=>{
    if(aboutRef.current){
      aboutRef.current.scrollIntoView({
        behaviour:'smoooth'
      });
    }
  }
 

  return (
    <>
    
    <Navbar scrollToAbout={scrollToAbout}/>
    <Home aboutRef={aboutRef}/>
    <Footer/>
    

    </>
  )
}

export default App
