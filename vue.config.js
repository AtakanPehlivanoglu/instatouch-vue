module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'FollowBack': [
              'src/content-scripts/FollowBack.js'
            ],
            'LikeComments': [
              'src/content-scripts/LikeComments.js'
            ]
          }
        }
      }
    }
  }
}
