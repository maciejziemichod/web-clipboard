// gh pages deployment

// module.exports = {
//   publicPath: "/web-clipboard/",
//   chainWebpack: config => {
//     config
//         .plugin('html')
//         .tap(args => {
//             args[0].title = "Web Clipboard";
//             return args;
//         })
// }
// };
module.exports = {
  publicPath: "/",
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Web Clipboard";
            return args;
        })
}
};
