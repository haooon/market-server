import * as components from './components/haoooncomponents/'
import {use, registerComponentProgrammatic, } from './utils/plugin'
import * as tools from './utils/tools.js'

const haooon = {
  install(Vue, options = {}) {
    for (let component in components) {
    	Vue.use(components[component])
    }
    Vue.prototype.$tools = tools
  }
}

use(haooon)
window.GATEWAY = "http://127.0.0.1:8888"
// window.GATEWAY = "http://39.105.99.88:8888"
export default haooon