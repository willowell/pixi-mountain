const path = require('node:path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@lib': path.resolve(__dirname, 'lib'),
        '@shaders': path.resolve(__dirname, 'shaders')
      }
    }
  })
}
