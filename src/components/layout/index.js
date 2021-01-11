import React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="container-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout