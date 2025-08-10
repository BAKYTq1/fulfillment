import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import SidebarToggle from '../components/SidebarToggle/SidebarToggle'
import ScrollToHashElement from '../components/ScrollHashElement/ScrollToHashElement'

function Layout() {
  return (
    <div>
       <ScrollToHashElement/>
      <Header/>
      <Outlet/>
      <Footer/>
      <SidebarToggle/>
    </div>
  )
}

export default Layout
