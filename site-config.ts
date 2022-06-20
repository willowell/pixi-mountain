export default {
  siteTitle: 'Pixi Mountain', // Site title.
  siteTitleShort: 'Pixi Mountain', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Pixi Mountain', // Alternative site title for SEO.
  siteLogo: '/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://pixi-mountain.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'PixiJS Starter with Gatsby and Chakra UI.', // Website description used for RSS feeds/meta description tag.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: {
    rootWebsite: '',
    parentWebsite: '',
    facebook: '',
    twitter: '',
    youtube: ''
  },
  copyright: `Copyright ${new Date().getFullYear()} William Howell`, // Copyright string for the footer of the website and RSS feed.
  themeColor: '#E52A65', // Used for setting manifest and progress theme colors.
  backgroundColor: '#000000' // Used for setting manifest background color.
}
