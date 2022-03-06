/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

/* module.exports = {

  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
  ],
} */

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
  ],
  siteMetadata:{
    title:"my gatsby website",
    description:"this is my website and is made with gatsby and tailwind",
    copyright:"well, i don't know "
  }
}
