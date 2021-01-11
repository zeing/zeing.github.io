import * as React from "react"
import video from "../videos/background.mp4"
import { Link } from "gatsby"
import classnames from "classnames"
import Seo from "../components/seo"
import Typed from "typed.js"

const IndexPage = () => {
  const [showInfo, setShowInfo] = React.useState(false)
  var options = {
    strings: [
      "WITTHAWIN SIRISIWAPHAK",
      'I\'m <span class="font-bold text-white">Eing.</span>',
      'I\'m <span class="font-bold text-white">Software Engineer.</span>',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
  }

  React.useEffect(() => {
    var typed = new Typed(".my-title", options)
    return () => {
      typed.destroy()
    }
  },[])

  const classIcon =
    "text-3xl text-white text-opacity-75 hover:text-white transition duration-500 ease-in-out hover:scale-125 group-hover:scale-125	transform"
  return (
    <main className="fullscreen relative">
      <Seo />
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col space-y-4">
          <div
            className="h-60 w-60 rounded-full shadow-2xl bg-white bg-opacity-30 cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? (
              <div className="flex flex-col h-full w-full justify-center items-center space-y-2">
                <span>WITTHAWIN SIRISIWAPHAK</span>
                <a
                  href="mailto:zeing@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email: zeing@outlook.com
                </a>
              </div>
            ) : (
              <img
                src="/images/profile.jpg"
                className="h-full w-full rounded-full mx-auto object-cover relative"
                width="384"
                height="512"
              />
            )}
          </div>
          <div className="text-center">
            <span className="text-white text-opacity-50 hover:text-white w-full my-title" />
          </div>
          <div className="flex justify-around space-x-4">
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
            <Link href="/blog">
              <i className={classnames("fas fa-globe-asia", classIcon)}></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-video">
        <video
          className="bg-video__content"
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
