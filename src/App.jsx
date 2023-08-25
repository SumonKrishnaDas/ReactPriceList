import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceList from './Components/Price list/PriceList'
import Dashbord from './Components/Dashboard/Dashbord'
import PhoneBar from './Components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar> </Navbar>
     <PriceList>  </PriceList>
     <Dashbord> </Dashbord>
     <PhoneBar></PhoneBar>
     
      
    </>
  )
}

export default App
