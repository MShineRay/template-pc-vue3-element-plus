/**
 * 接口服务配置
 * @private
 * @type {object}
 */
const API_MOCK_PHP = 'fe-mock-php' // mock=>调用在服务器上的PHP程序来读取模拟数据
const API_PROXY = '/fe-api-proxy' //通过vueCLI自身携带的代理功能来进行接口访问达到跨域成功
const API_LOCAL = '/fe-api-local' // 调用本地nodejs程序来读取模拟数据
let WS_PROTOCOL, HTTP_PROTOCOL
try {
  WS_PROTOCOL = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  HTTP_PROTOCOL = window.location.protocol === 'https:' ? 'https:' : 'http:'
} catch (error) {
  WS_PROTOCOL = 'ws:'
  HTTP_PROTOCOL = 'http:'
}

let online = {
  common: {},
  special: {
    debug: false,// 调试模式
  }
}

let mock = {
  common: {
    shareUrl: API_MOCK_PHP + '/share',
  },
  special: {
    debug: true,// 调试模式
  }
}

let dev = {
  common: {},
  special: {
    debug: true,// 调试模式
  }
}
let test = {
  common: {},
  special: {
    debug: true,// 调试模式
  }
}

let sit = {
  common: {},
  special: {
    debug: true,// 调试模式

  }
}
let uat = {
  common: {},
  special: {
    debug: true,// 调试模式

  }
}
// 准生产环境、灰度环境
let pre = {
  common: {},
  special: {
    debug: true,// 调试模式
  }
}


let nodeProxyApi = {}

let locDev = {
  common: nodeProxyApi,
  special: {}
}
let locTest = {
  common: nodeProxyApi,
  special: {}
}
let locSit = {
  common: nodeProxyApi,
  special: {}
}

let locPre = {
  common: nodeProxyApi,
  special: {}
}

let locUat = {
  common: nodeProxyApi,
  special: {}
}

let locMock = {
  common: {
    shareUrl: API_LOCAL + '/share',
  },
  special: {}
}
const feServerConfig = {
  online,
  dev,
  test,
  sit,
  pre,
  uat,
  mock,
  locDev,
  locTest,
  locSit,
  locPre,
  locUat,
  locMock
}
console.log('feServerConfig:', feServerConfig)
module.exports = feServerConfig