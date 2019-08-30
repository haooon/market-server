import * as components from './components/haoooncomponents/'
import {use, registerComponentProgrammatic, } from './utils/plugin'


const haooon = {
  install(Vue, options = {}) {
    for (let component in components) {
    	Vue.use(components[component])
    }
    // Vue.prototype.$tools = tools
  }
}
use(haooon)

export default haooon