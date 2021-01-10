import * as React from "react"
import classnames from 'classnames'
import Seo from '../components/seo'

const IndexPage = () => {

  return (
    <main className="flex h-full w-full justify-center">
      <div className="flex h-full w-full flex-wrap max-w-screen-lg p-20">
        <div class="flex w-full bg-white shadow p-4 rounded">
          <div class="text-center mt-4">
            <p class="text-gray-600 font-bold">Name
    </p>
            <p class="text-sm font-hairline text-gray-600 mt-1">Subtitle
    </p>
          </div>
          <div class="flex justify-center mt-4">
            <img class="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full" src="" alt="Avatar" />
          </div>
          <div class="mt-6 flex justify-between text-center">
            <div>
              <p class="text-gray-700 font-bold">20
      </p>
              <p class="text-xs mt-2 text-gray-600 font-hairline">Posts
      </p>
            </div>
            <div>
              <p class="text-gray-700 font-bold">99k
      </p>
              <p class="text-xs mt-2 text-gray-600 font-hairline">Likes
      </p>
            </div>
            <div>
              <p class="text-gray-700 font-bold">530
      </p>
              <p class="text-xs mt-2 text-gray-700 font-hairline">Shares
      </p>
            </div>
          </div>
          <div class="mt-6">
            <button class="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
              Follow
    </button>
          </div>
        </div>
      </div>
      <Seo />
    </main>
  )
}

export default IndexPage
