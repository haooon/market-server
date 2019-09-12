<template>
  <div class="hello">
    <a @click="run">(You can click here to run tasks on Server)</a>
  	<p class="common">(You can double click on an item to turn it into a folder.)</p>
    <tree :tree-data.sync="treeData"></tree>
    <div class="black">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Smart Tasks Surveillance Centre(STSC)     Get problems? ==> contact email:shr@haooon.com',
      treeData:{"info":{"father":"9de3d635-d172-11e9-8a65-14dda955824f","health":100,"key":"9de3d638-d172-11e9-ba2c-14dda955824f","kids":[],"name":"STSC","status":"RUNNING"}},
    }
  },
  methods: {
    setTreeData(data){
      console.log("setTreeData")
      this.treeData = data
    },
    get_data(){
      fetch(GATEWAY + "/task", {method: 'GET'}) 
      .then(response => response.json())
      .then(data => {
        this.treeData = data
      })
    },
    run(){
      fetch(GATEWAY + "/run", {method: 'GET'}) 
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
<style scoped>
.hello{
	background-color: black;
	height: 100%;
	width: 100%;
}
h1, h2 {
  font-weight: normal;
  color: black;
}
.common {
  color:#eaeaea;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.black{
  color: black;
}
</style>