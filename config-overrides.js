const { override, fixBabelImports } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
// module.exports = {
//   webpack: override(
//     fixBabelImports('import', {
//       libraryName: 'antd',
//       libraryDirectory: 'es',
//       style: 'css'
//     })
//   ),
//   devServer: overrideDevServer(
//     // dev server plugin
//     watchAll()
//   )
// }