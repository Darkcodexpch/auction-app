import React from 'react'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Home from '../Components/Home/Home'
import Items from '../Components/Items/Items'
import SingleItem from '../Components/SingleItem/SingleItem'
import Sale from '../Components/SalePage/Sale'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Dashboard from '../Components/SalePage/Dashboard'
import AddItem from '../Components/SalePage/AddItem'
import Message from '../Components/SalePage/Message'



export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Items' element={<Items/>}></Route>
      <Route path='/Singleitem' element={<SingleItem/>}></Route>
      <Route path='Sale' element={<Sale/>}>
      <Route path='' element={<Dashboard/>}></Route>
      <Route path='Additem' element={<AddItem/>}></Route>
      <Route path='Message' element={<Message/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}
