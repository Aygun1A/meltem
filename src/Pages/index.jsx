import React from 'react'
import './style.css'
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";

import { Error } from '../Components';


import SignIn from './SignIn'
import TestContext from './TestContext'
import TestContextE from './TestContextE'

// import SignUp from './SignUp'
// import Home from './Home'

const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<SignIn />} />
        {/* <Route path="blogs" element={<SignUp />} />
        <Route path="contact" element={<Home />} /> */}
        <Route path="*" element={< Error/>} />
        <Route path="test-context" element={< TestContext/>} />
        <Route path="testcontextE" element={< TestContextE/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Index
