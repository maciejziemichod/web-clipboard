module.exports = {
  // gh pages deployment
  publicPath: "/web-clipboard/",

  // for anything other that gh pages'
  //   publicPath: "/",

  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Web Clipboard";
            return args;
        })
}
};
