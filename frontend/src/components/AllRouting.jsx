import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Products from './Products'
import Login from './Login'
import Signup from './Signup'
import AddProducts from './AddProducts'

const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/addProducts' element={<AddProducts/>} />
        </Routes>
      
    </div>
  )
}

export default AllRouting