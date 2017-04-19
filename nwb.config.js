module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactGoogleMaterialIcons',
      externals: {
        react: 'React'
      }
    }
  }
}
