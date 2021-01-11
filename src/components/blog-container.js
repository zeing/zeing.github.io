import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/400"
const MEDIUM_URL = "https://medium.com"
const query = graphql`
  query Medium {
    allMediumPost(limit: 7, sort: { fields: createdAt, order: ASC }) {
      totalCount
      edges {
        node {
          id
          uniqueSlug
          title
          createdAt(formatString: "MMM YYYY")
          virtuals {
            subtitle
            readingTime
            previewImage {
              imageId
            }
          }
          author {
            username
          }
        }
      }
    }
  }
`
const BlogContainer = () => {
  return (
    <StaticQuery
      query={query}
      render={({ allMediumPost }) => {
        console.log("allMediumPost", allMediumPost.edges)
        return (
          <section className="flex">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-24 ">
              {allMediumPost.edges.map((post, key) => (
                <Link
                  to={`${MEDIUM_URL}/@${post.node.author.username}/${post.node.uniqueSlug}`}
                  target="_blank"
                  key={key}
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ease-in duration-200">
                    <img
                      src={`${MEDIUM_CDN}/${post.node.virtuals.previewImage.imageId}`}
                      alt={allMediumPost.edges[0].node.image}
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                    />
                    <div className="p-6 h-56">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {post.node.author.username}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.node.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {post.node.virtuals.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap px-6 pb-3">
                      <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                      </span>
                      <span className="flex space-x-2">
                        <span>{post.node.createdAt}</span>
                        <span>
                          {Math.ceil(post.node.virtuals.readingTime)} min read
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      }}
    />
  )
}

export default BlogContainer
