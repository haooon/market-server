<template>
  <div class="hello">
    <div class="percent">
      <div class="inpercent">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
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

  }
}

</script>
<style scoped>
.percent{
  width:40px;
  height:10px;
  background-color:green;
  border-radius:7px;
}
.inpercent{
  width:0px;
  height:10px;
  background-color:red;
  border-radius:7px 7px 7px 7px;
}

.inpercent:hover{
  width:40px;
  height:10px;
  background-color:red;
  border-radius:7px 7px 7px 7px;
}
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