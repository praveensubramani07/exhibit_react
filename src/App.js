import React,{useState} from 'react'
import Nav from './componenet/Nav'
import Loging from './componenet/Loging'
import { BrowserRouter,Routes,Route,Redirect} from 'react-router-dom'
import Dashboard from './componenet/Dashboard'
import Profile from './componenet/Profile'

export default function App() {
  const [username,setUsername]=useState(window.location.pathname)
  console.log(username)
  

  
  return (
    <>
    
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Nav/>}/>
    <Route path='/login' element={<Loging/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/:username' element={<Profile/>}/>

  </Routes>
  
  </BrowserRouter>

    
  </>
    
  )
}
