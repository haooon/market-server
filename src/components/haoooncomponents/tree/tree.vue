<template>
  <div>
    <ul id="tree">
      <tree-item
        class="item"
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tree',
  // el: '#tree',
  props: {
    item: treeData
  },
  data(){
    return{
      
    }
  },
  methods: {
    makeFolder: function (item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function (item) {
      item.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style scoped>
  ul{
    color: #f8f8f8;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
