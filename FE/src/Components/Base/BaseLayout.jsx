import React from 'react'
import { Outlet } from 'react-router-dom'
import    Header from './Header'
import Footer from './Footer'



function BaseLayout() {

  return (
    <>
    <div class="fixed -z-10 h-screen w-full bg-gradient-to-br from-red-300/30 via-white to-red-400/10"></div>
    <Header  />
    <Outlet   />
    <Footer />
   

    </>
  )
}

export default BaseLayout