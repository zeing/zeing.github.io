import * as React from "react"
import video from '../videos/background.mp4'
import classnames from 'classnames'
import Seo from '../components/seo'

const IndexPage = () => {
  const classIcon = "text-3xl text-white text-opacity-75 hover:text-white transition duration-500 ease-in-out hover:scale-125	transform"
  return (
    <main className="fullscreen relative">
      <Seo/>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col space-y-4">
          <img src="/images/profile.jpg" className="h-60 w-60 rounded-full mx-auto object-cover shadow-2xl" width="384" height="512" />
          <span className="text-center text-white text-opacity-50  hover:text-white">WITTHAWIN SIRISIWAPHAK</span>
          <div className="flex justify-around">
            <a href="https://fb.com/einguht" target="_blank" rel="noreferrer" >
              <i className={classnames("fab fa-facebook", classIcon)}></i>
            </a>
            <a href="https://www.instagram.com/zeing/" target="_blank" rel="noreferrer" >
              <i className={classnames("fab fa-instagram", classIcon)}></i>
            </a>
            <a href="https://www.github.com/zeing/" target="_blank" rel="noreferrer" >
              <i className={classnames("fab fa-github", classIcon)}></i>
            </a>
            <a href="https://www.linkedin.com/in/witthawin/" target="_blank" rel="noreferrer" >
              <i className={classnames("fab fa-linkedin", classIcon)}></i>
            </a>
            <a href="mailto:zeing@outlook.com" target="_blank" rel="noreferrer" >
              <i className={classnames("fas fa-at", classIcon)}></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-video">
        <video className="bg-video__content"
          poster="/images/background-img.jpg"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
            Your browser is not supported!
        </video>
      </div>
    </main>
  )
}

export default IndexPage
