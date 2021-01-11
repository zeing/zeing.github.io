import React from "react"
import icon from "../../images/icon.png"
import classnames from "classnames"
import { Link } from "gatsby"

const Navbar = () => {
  const classIcon =
    "text-xl text-black text-opacity-75 hover:text-black transition duration-500 ease-in-out hover:scale-125 group-hover:scale-125	transform"

  return (
    <header className="text-gray-600 body-font flex justify-between w-full p-5">
      <div className="flex items-center">
        <a
          className="flex font-medium items-center text-gray-900"
          href="/"
        >
          <img
            src={icon}
            className="w-10 h-10 text-white p-2 bg-blue-900 rounded-full"
            alt="logo"
          />
          <span className="ml-3 text-xl">Zeing</span>
        </a>
        <nav className="mr-auto ml-4 py-1 pl-4 border-l md:border-gray-400 flex flex-wrap items-center justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">
            Home
        </a>
        </nav>
      </div>
      <div className="flex justify-around items-center space-x-4">
        <a href="https://fb.com/einguht" target="_blank" rel="noreferrer">
          <i className={classnames("fab fa-facebook", classIcon)}></i>
        </a>
        <a
          href="https://www.instagram.com/zeing/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative group">
            <i className={classnames("fab fa-instagram", classIcon)}></i>
            <span className="flex h-2 w-2 absolute top-0 -right-0.5 transition duration-500 ease-in-out group-hover:scale-125	transform">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </div>
        </a>
        <a
          href="https://www.github.com/zeing/"
          target="_blank"
          rel="noreferrer"
        >
          <i className={classnames("fab fa-github", classIcon)}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/witthawin/"
          target="_blank"
          rel="noreferrer"
        >
          <i className={classnames("fab fa-linkedin", classIcon)}></i>
        </a>
      </div>
    </header>
  )
}

export default Navbar
