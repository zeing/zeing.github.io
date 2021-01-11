import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="container-xl mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Navbar />
        <div className="p-5">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
