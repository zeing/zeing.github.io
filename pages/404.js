import * as React from 'react'
import Link from 'next/link'

// markup
const NotFoundPage = () => {
  return (
    <main className="bg-gradient-to-r from-blue-900 to-blue-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          <img src={'/images/error.svg'} alt="Not Found" />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page has gone missing.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          {/* <a href="#" className="border border-white rounded p-4">Go Home</a> */}
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in{' '}
              <code className="border border-white rounded p-4">
                src/pages/
              </code>
              <br />
            </>
          ) : null}
          <br />
          <Link href="/" className="border border-white rounded p-4">
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
