<template>
  <div class="hello">
  	<p>(You can double click on an item to turn it into a folder.)</p>
    <tree :tree-data="treeData"></tree>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // treeData: {
      //   name: 'My Tree',
      //   children: [
      //     { name: 'hello' },
      //     { name: 'wat' },
      //     {
      //       name: 'child folder',
      //       children: [
      //         {
      //           name: 'child folder',
      //           children: [
      //             { name: 'hello' },
      //             { name: 'wat' }
      //           ]
      //         },
      //         { name: 'hello' },
      //         { name: 'wat' },
      //         {
      //           name: 'child folder',
      //           children: [
      //             { name: 'hello' },
      //             { name: 'wat' }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // },
      treeData:{'info': {'name': 'main', 'status': 'RUNNING', 'health': 100, 'kids': [{'info': {'name': 'quartzTest', 'status': 'RUNNING', 'health': 0, 'kids': [{'info': {'name': 'TestTasks', 'status': 'RUNNING', 'health': 100.0, 'kids': [{'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}, {'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}, {'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}], 'key': 'f7250e42-d076-11e9-9156-9801a79f6ec1', 'father': 'f724fab0-d076-11e9-ac70-9801a79f6ec1'}}, {'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}, {'info': {'name': 'TestTasks', 'status': 'RUNNING', 'health': 100.0, 'kids': [{'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}, {'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}, {'info': {'name': 'Trrrs', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': 'f7250e45-d076-11e9-bd51-9801a79f6ec1', 'father': 'f7250e42-d076-11e9-9156-9801a79f6ec1'}}], 'key': 'f7250e42-d076-11e9-9156-9801a79f6ec1', 'father': 'f724fab0-d076-11e9-ac70-9801a79f6ec1'}}], 'key': 'f724fab0-d076-11e9-ac70-9801a79f6ec1'}}]}},
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	background-color: black;
	height: 100%;
	width: 100%;
}
h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>