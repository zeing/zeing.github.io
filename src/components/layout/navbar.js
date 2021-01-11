import React from 'react'
import icon from '../../images/icon.png'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font flex justify-between w-full">
      <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0" href="/" >
        <img src={icon} className="w-10 h-10 text-white p-2 bg-blue-900 rounded-full" alt="logo" />
        <span className="ml-3 text-xl">Zeing</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5 hover:text-gray-900">Home</a>
      </nav>
    </header>
  )
}

export default Navbar