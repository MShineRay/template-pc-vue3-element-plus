const feServerConfig = require('./src/common/feServerConfig')
const FE_PROXY = '/fe-api-local' //通过vueCLI自身携带的代理功能来进行接口访问达到跨域成功
const hostToEnv = {
  'mock.local.fe.cn': 'locMock',
  'dev.local.fe.cn': 'locDev',
  'test.local.fe.cn': 'locTest',
  'sit.local.fe.cn': 'locSit',
  'uat.local.fe.cn': 'locUat',
  'pre.local.fe.cn': 'locPre',
}

let _host = ''
process.argv.forEach(function (value, index) {
  if (value === '--host') {
    _host = process.argv[index + 1]
  }
})
let envConf = feServerConfig[hostToEnv[_host]]
console.log('envConf:',envConf)
module.exports = function () {
  let proxyObj = {
    'default': { //初始化配置 防止proxyObj为空时格式异常
      target: 'http://localhost',
      pathRewrite:{}
    }
  }
  if (envConf && envConf.common) {
    Object.keys(envConf.common).forEach(function (key) {
      let _key = FE_PROXY + '/' + key.slice(0, -3) + '/'
      console.log('_key:', _key)
      proxyObj[_key] = {
        target: 'http:' + envConf.common[key].replace(/http:|https:/, ''),
        ws: true,
        changeOrigin: true,
        pathRewrite: {}
      }
      console.log("proxyObj1:",proxyObj)
      proxyObj[_key]['pathRewrite']['^' + _key] = ''
      console.log("proxyObj2:",proxyObj)
    })
  }
  return proxyObj
}
