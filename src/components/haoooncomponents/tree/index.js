import tree from './tree'
import tree_item from './tree-item'
import {use, registerComponent} from '../../../utils/plugin'

const Plugin = {
  install(Vue) {
  	registerComponent(Vue, tree)
  	registerComponent(Vue, tree_item)
  }
}

use(Plugin)

export default Plugin

export {
  tree,
  tree_item,
}