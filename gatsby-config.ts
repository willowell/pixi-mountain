import type { GatsbyConfig } from 'gatsby'
import path from 'node:path'
import config from './site-config'

const gatsbyConfig: GatsbyConfig = {
  /// ============================================================================================== ///
  ///                                    SITE METADATA                                               ///
  /// ============================================================================================== ///

  siteMetadata: {
    title: config.siteTitle,
    author: {
      name: config.siteTitle
    },
    description: config.siteDescription,
    siteUrl: `${config.siteUrl}${config.pathPrefix}`,
    logo: `${config.siteUrl}${config.pathPrefix}favicon.png`
  },

  /// ============================================================================================== ///
  ///                                      JSX RUNTIME                                               ///
  /// ============================================================================================== ///

  jsxRuntime: 'automatic',

  /// ============================================================================================== ///
  ///                                   GRAPHQL TYPEGEN                                              ///
  /// ============================================================================================== ///

  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  /// ============================================================================================== ///
  ///                                           PLUGINS                                              ///
  /// ============================================================================================== ///

  plugins: [
    /// ============================================================================================== ///
    ///                                            META                                                ///
    /// ============================================================================================== ///

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        theme_color: config.themeColor,
        background_color: config.backgroundColor,

        display: 'minimal-ui',
        icon: 'static/favicon.png'
      }
    },

    /// SEO
    'gatsby-plugin-react-helmet',

    'gatsby-plugin-sitemap',

    'gatsby-plugin-robots-txt',

    /// ============================================================================================== ///
    ///                              IMAGES AND STATIC DATA                                            ///
    /// ============================================================================================== ///

    'gatsby-plugin-image',

    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/images/'),
        name: 'images'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/misc/'),
        name: 'misc'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/posts/'),
        name: 'posts'
      }
    },

    /// ============================================================================================== ///
    ///                                          MARKDOWN                                              ///
    /// ============================================================================================== ///

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },

    'gatsby-plugin-catch-links',

    /// ============================================================================================== ///
    ///                                            GLSL                                                ///
    /// ============================================================================================== ///

    'gatsby-plugin-glslify',

    /// ============================================================================================== ///
    ///                                           STYLING                                              ///
    /// ============================================================================================== ///

    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true
      }
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#02bcc7',
        showSpinner: false
      }
    }
  ]
}

export default gatsbyConfig
