import * as React from "react"
import classnames from "classnames"
import Seo from "../components/seo"
import Hero from '../components/hero'
import { Link } from "gatsby"

const ResumePage = () => {
  return (
    <>
      <Hero showNavbar goTo="#about" />
      <main className="flex flex-col w-full justify-center" id="about">
        <div className="flex space-y-10 md:space-y-0 md:space-x-10 h-full w-full flex-wrap max-w-screen-xl p-20">
          <div className="flex justify-center w-full md:w-auto">
            <img
              className="shadow rounded-full object-cover h-48 w-48"
              src="/images/profile.jpg"
              alt="Avatar"
              width="384"
              height="512"
            />
          </div>
          <div className="flex-1 flex-col">
            <p className="font-bold">WITTHAWIN SIRISIWAPHAK</p>
            <p className="text-sm font-hairline text-gray-600">Software Engineer</p>
            <p className="mt-3">
              Experienced Software Developer since I'm a senior in university, I have joined the Co-operative Education program which gives me more experience.</p>
            <p>I am looking for new challenges in ML, DevOps, new technology, and new technique. </p>
            <p className="mt-4">
              <a download target="_blank" href="/pdf/witthawin-resume.pdf" className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md space-x-2">
                <span>Resume File</span>
                <i className="far fa-file-archive"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-20">
          <div className="flex space-y-10 md:space-y-0 md:space-x-10 h-full w-full flex-wrap max-w-screen-xl">
            <h2 className="text-4xl uppercase w-full md:w-auto">Contact</h2>
            <div className="flex-1 flex-col">
              <div className="flex items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 ">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide w-40">
                  Sutthisan Road, Huai Khwang Bangkok 10310
                </div>
              </div>
              {/* <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div> */}
              <div className="flex items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="mailto:zeing@outlook.com" className="ml-4 text-md tracking-wide w-40">
                  zeing@outlook.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Seo />
      </main>
    </>
  )
}

export default ResumePage
