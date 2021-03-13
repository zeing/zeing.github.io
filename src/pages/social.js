import * as React from "react"
import classnames from "classnames"
import Seo from "../components/seo"
import Hero from '../components/hero'
import { graphql } from "gatsby"
import Img from "gatsby-image"

const SocialPage = ({ data: { allInstaNode } }) => {
  console.log(allInstaNode)
  return (
    <>
      <Hero showNavbar goTo="#detail" />
      <main className="flex flex-col items-center w-full justify-center" id="detail">
        <div className="flex space-y-10 md:space-y-0 md:space-x-10 h-full w-full flex-wrap max-w-screen-xl p-20">
          <div className="grid grid-cols-3 w-full">
            {allInstaNode && allInstaNode.edges.map(({ node }, index) => {
              return (
                <a className="flex w-full justify-center h-auto relative group" href={`https://www.instagram.com/p/${node.id}/`} target="_blank" key={index}>
                  <Img fluid={node.localFile.childImageSharp.fluid} className="w-full h-auto " />
                  <div className="flex justify-center items-center absolute top-0 w-full h-full p-4 opacity-0 group-hover:opacity-100 cursor-pointer transition transform duration-500 group-hover:bg-black group-hover:bg-opacity-40">
                    <div className="text-white break-words">{node.caption}</div>
                  </div>
                </a>
              )
            })}
          </div>
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

export const pageQuery = graphql`
  query IndexQuery {
    allInstaNode {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default SocialPage
