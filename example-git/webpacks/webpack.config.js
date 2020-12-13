module.exports = {
  entry: './vue-notifyjs/dist/vue-notifyjs.common.js',
  output: {
    filename: './vue-notify.umd.js',
    // export to AMD, CommonJS, or window
    libraryTarget: 'umd',
    // the name exported to window
    library: 'notify'
  }
};