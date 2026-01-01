const { loadEnvFile } = require('node:process');
loadEnvFile('.env');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    'gatsby-plugin-sass',
    // Advanced config, passing parameters to apollo-link
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'oneillc.io',
        protocol: 'https',
        hostname: 'oneillc.io',
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'G-GW3BL6SVVK',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ['/preview/**', '/do-not-track/me/too/'],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
    //     // Enables Google Optimize Experiment ID
    //     // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
    //     // Set Variation ID. 0 for original 1,2,3....
    //     // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     // sampleRate: 5,
    //     // siteSpeedSampleRate: 10,
    //     cookieDomain: 'oneillc.io',
    //   },
    // },
  ],
};
