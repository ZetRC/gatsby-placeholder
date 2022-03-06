import React from 'react'
import "../styles/global.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout({children}) {
  return (
      <>
        <Navbar/>
          <div className="min-h-screen">
              {children}
          </div>
        <Footer/>
      </>
  )
}
