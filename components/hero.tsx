'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Typed from 'typed.js'
import Cover from 'react-video-cover'

const typedStrings = [
  'WITTHAWIN SIRISIWAPHAK',
  'I\'m <span class="font-bold text-white">Eing.</span>',
  'I\'m <span class="font-bold text-white">Software Engineer.</span>',
]

interface HeroProps {
  showNavbar?: boolean
  goTo?: string
}

const Hero = ({ showNavbar = false, goTo }: HeroProps) => {
  useEffect(() => {
    const typed = new Typed('.my-title', {
      strings: typedStrings,
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  const classIcon =
    'text-3xl text-white text-opacity-75 hover:text-white transition duration-500 ease-in-out hover:scale-125 group-hover:scale-125 transform cursor-pointer'

  const classHeader =
    'no-underline uppercase text-xs py-3 text-opacity-75 hover:text-white transition duration-500 ease-in-out hover:scale-125 group-hover:scale-125 transform cursor-pointer'

  const videoOptions = {
    src: '/videos/background.mp4',
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
  }

  return (
    <main className="fullscreen relative">
      <div className="flex flex-col h-screen justify-center items-center relative">
        {showNavbar && (
          <nav className="px-8 pt-2 absolute top-0 text-white text-opacity-75 font-thin">
            <div className="flex justify-center space-x-8">
              <Link href="/" passHref>
                <div className={classHeader}>Home</div>
              </Link>
              <Link href="https://discord.gg/juice-box" className={classHeader} target="_blank">
                Discord
              </Link>
              <Link href="https://hollow.zeing.xyz" className={classHeader} target="_blank">
                Hollow Bot
              </Link>
            </div>
          </nav>
        )}
        <div className="flex flex-col space-y-4">
          <div className="h-60 w-60 rounded-full shadow-2xl bg-white bg-opacity-30">
            <img
              src="/images/profile.jpg"
              className="h-full w-full rounded-full mx-auto object-cover relative"
              width="384"
              height="512"
              alt="profile"
            />
          </div>
          <div className="text-center">
            <span className="text-white text-opacity-50 hover:text-white w-full my-title" />
          </div>
          <div className="flex justify-around space-x-4">
            <Link href="https://fb.com/einguht" target="_blank" rel="noreferrer">
              <i className={classnames('fab fa-facebook', classIcon)} aria-hidden="true"></i>
            </Link>
            <Link href="https://www.instagram.com/zeing/" target="_blank" rel="noreferrer">
              <div className="relative group">
                <i className={classnames('fab fa-instagram', classIcon)} aria-hidden="true"></i>
                <span className="flex h-2 w-2 absolute top-0 -right-0.5 transition duration-500 ease-in-out group-hover:scale-125 transform">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </div>
            </Link>
            <Link href="https://www.github.com/zeing/" target="_blank" rel="noreferrer">
              <i className={classnames('fab fa-github', classIcon)} aria-hidden="true"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/witthawin/" target="_blank" rel="noreferrer">
              <i className={classnames('fab fa-linkedin', classIcon)} aria-hidden="true"></i>
            </Link>
            <Link href="https://discord.gg/juice-box" target="_blank" rel="noreferrer">
              <i className={classnames('fab fa-discord', classIcon)} aria-hidden="true"></i>
            </Link>
            <Link href="mailto:zeing@outlook.com" passHref target="_blank">
              <i className={classnames('fas fa-envelope', classIcon)} aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        {goTo && (
          <nav className="absolute bottom-0 text-white text-opacity-75 pb-20 md:pb-10 text-4xl">
            <Link href={goTo} passHref>
              <div className="flex justify-center cursor-pointer">
                <i className="fas fa-chevron-down animate-bounce" aria-hidden="true"></i>
              </div>
            </Link>
          </nav>
        )}
      </div>
      <div className="bg-video">
        <Cover videoOptions={videoOptions} remeasureOnWindowResize />
      </div>
    </main>
  )
}

export default Hero
