import React from 'react'
import BlogContainer from '../../components/blog-container'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <div className="flex flex-wrap sm:flex-row flex-col mt-12 w-full">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
          Space of Zeing's Blog
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          “If you want to go fast, go alone. If you want to go far, bring others
          along.”
        </p>
      </div>
      <BlogContainer />
    </Layout>
  )
}
