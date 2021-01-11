module.exports = {
  siteMetadata: {
    title: "I am Zeing",
    titleTemplate: "%s ·",
    siteUrl: "https://zeing.me",
    description: "All about zeing",
    url: "https://zeing.me", // No trailing slash allowed!
    image: "/images/thumbnail.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@wwz",
    author: "zeing",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/wwz`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/zeing`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-SWWT8QB292",
      },
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "@zeing", // Medium user name
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "./src/videos/",
      },
      __key: "videos",
    },
  ],
}
