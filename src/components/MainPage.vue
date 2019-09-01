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
      treeData: {'info': {'name': 'main', 'status': 'RUNNING', 'health': 100, 'kids': [{'info': {'name': 'task manager', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': '6d49ca58-cbfb-11e9-92aa-14dda955824f'}}, {'info': {'name': 'quartzTest', 'status': 'RUNNING', 'health': 100, 'kids': [{'info': {'name': 'TestTasks', 'status': 'RUNNING', 'health': 100, 'kids': [], 'key': '6d4b9e94-cbfb-11e9-9957-14dda955824f'}}], 'key': '6d49ca59-cbfb-11e9-8285-14dda955824f'}}]}}

,
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