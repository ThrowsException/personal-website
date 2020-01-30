require("dotenv").config({
  path: ".env"
});

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
    },
    // Advanced config, passing parameters to apollo-link
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        // refetch interval in seconds
        refetchInterval: 3600
      }
    }
  ]
};
