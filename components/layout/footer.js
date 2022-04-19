import React from 'react'
import classnames from 'classnames'

const Footer = () => {
  return (
    <footer className="text-white bg-blue-900 w-full flex items-center p-5 h-16">
      <a className="flex font-medium items-center md:justify-start justify-center text-white">
        <span className="ml-3 text-xl">Zeing</span>
      </a>
      <p className="text-sm align-bottom self-end text-white ml-4 pl-4 px-2 border-l-2">
        © {new Date().getFullYear()} Zeing —
        <a
          href="https://twitter.com/wwz"
          className="text-white ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @wwz
        </a>
      </p>
    </footer>
  )
}

export default Footer
