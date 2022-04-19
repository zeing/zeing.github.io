import * as React from 'react'
import classnames from 'classnames'
import Seo from 'components/seo'
import Hero from 'components/hero'

const SocialPage = () => {
  return (
    <>
      <Hero showNavbar goTo="#detail" />
      <main
        className="flex flex-col items-center w-full justify-center"
        id="detail"
      >
        <div className="flex space-y-10 md:space-y-0 md:space-x-10 h-full w-full flex-wrap max-w-screen-xl p-20">
          <iframe src="https://www.instagram.com/zeing/" className="w-full" />
        </div>
        {/* <div className="flex space-y-10 md:space-y-0 md:space-x-10 h-full w-full flex-wrap max-w-screen-xl p-20">
          <p className="font-bold">TWITTER RATE @WWZ</p>
          <ul className="list-disc list-inside">
            <li>1,500.- ต่อ 1 Tweet สามารถลงรูปหรือวิดิโอได้ ( ลงรูปได้สูงสุด 2 รูป )</li>
            <li>2,000.- ต่อ 1 Tweet สามารถลงรูปหรือวิดิโอ ( ลงรูปได้สูงสุด 4 รูป )</li>
            <li>ถ้าเป็น Content ที่มีโจทย์ต้องทำรบกวนขอรายละเอียดก่อนครับ</li>
          </ul>
        </div> */}
        <Seo />
      </main>
    </>
  )
}

export default SocialPage
