/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://hathenac.vercel.app`,
    description: `My personal web portfolio`,
    author:`Tuan`,
  },
  plugins: ["gatsby-plugin-image","gatsby-plugin-emotion","gatsby-plugin-styled-components","gatsby-plugin-postcss", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon_new.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: "gatsby-omni-font-loader",
    options: {
      mode: "async",
      enableListener: true,
      preconnect: ["https://fonts.gstatic.com"],

      web: [{
        name: "Sofia Sans",
        file: "https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      }, {
        name: "Playfair Display",
        file: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      }]
    }
  }]
};