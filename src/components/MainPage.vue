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
      treeData:{"info":{"father":"9de3d635-d172-11e9-8a65-14dda955824f","health":100,"key":"9de3d638-d172-11e9-ba2c-14dda955824f","kids":[],"name":"Trrrs","status":"RUNNING"}},
    }
  },
  methods: {
    get_data(){
      fetch(GATEWAY + "/task", {method: 'GET'}) 
      .then(response => response.json())
      .then(data => {
        this.treeData = data
      })
    }
  },
  mounted(){
    this.get_data()
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