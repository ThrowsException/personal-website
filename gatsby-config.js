module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-plugin-ts-loader`
    },
    {
      resolve: `gatsby-transformer-remark`
    }
  ]
};
