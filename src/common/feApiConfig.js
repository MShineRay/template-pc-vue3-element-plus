/**
 * 接口配置文件
 */
import feConfig from './feConfig'

const ENV = feConfig['environment']
const SHARE_URL = feConfig['shareUrl']


let feApiConfig = {
  '001': SHARE_URL + '/search', //
}

export default feApiConfig
