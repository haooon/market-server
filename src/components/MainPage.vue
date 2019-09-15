<template>
  <div class="hello">
    <div style="float: left;">
      <a @click="run">(You can click here to run tasks on Server)</a>
    	<p @click="get_data" class="common">(You can double click on an item to turn it into a folder.)</p>
      <tree :tree-data="treeData"></tree>
      <div class="black">{{msg}}</div>
      <div class="black">
        <span v-for="n in 100">
          <strong v-bind:style="{ backgroundColor:$tools.getColor(n*1)  }">&nbsp;</strong>
        </span>
      </div>
    </div>
    <div style="background-color:black; color:white; float: right; width: 50%; height: 100%;">
      {{$store.state.infoData}}
    </div>
    <div class="clear"></div> 
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
        console.log(this.treeData)
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
.clear{ clear:both}
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
  margin: 0;
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