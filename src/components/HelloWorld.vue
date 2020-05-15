<template>
  <div id="midcontent">
    <div id="header">
      <img id="logo" src="https://liver-anime.com/anime/logo.png">
      <img id="logo" src="https://liver-anime.com/anime/slogan.png">
      <!-- <div id="title1">
        <p>肝!动画</p>
      </div>
      <div id="title2">
        <p>Liver Animation</p>
      </div>
      <div id="title3">
        <p>肝臓のアニメーション</p>
      </div> -->
    </div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 5" :key="item">
        <img style="height: 100%;" :src="urls[(item-1)*5+1]">
        <img style="height: 100%;" :src="urls[(item-1)*5+2]">
        <img style="height: 100%;" :src="urls[(item-1)*5+3]">
        <img style="height: 100%;" :src="urls[(item-1)*5+4]">
        <img style="height: 100%;" :src="urls[(item-1)*5+5]">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data:function() {
    return {
      msg: 'Welcome to Your Vue.js App',
      urls: [],
      total: 25,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted:function() {
      this.urls = []
      for (var i = 1; i <= this.total; i++) {
        this.urls.push("https://liver-anime.com/anime/" + i + ".jpg")
      }
      this.$notify({
        title: '欢迎入驻！',
        message: '欢迎大触，和未来的大触们！',
        duration: 0
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#midcontent{ 
  width: 60%;
  margin: 0 auto; 
  /*border: 2px solid grey;*/
  border-top:none;border-bottom:none;
  box-shadow: 0px 0px 10px #E6E6E6;
}
#header{
  padding-top: 5%;
  height: 25%;
  width: 100%;
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  #midcontent{ 
    width: 80%; 
    margin: 0 auto; 
    border: 0px solid black;
    box-shadow: 0px 0px 0px #E6E6E6;
  }
  #header{
    margin-top: 10%;
    height: 15%;
    width: 100%;
  }
}
#midcontent{
  /*background-color:red;*/
  height: 100%;
  /*background-color: grey;*/
}
#header {
  /*background-color: green;*/
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
#logofont {
  /*isplay: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height:90%;
  margin:0;
  padding:0;*/
  /*width:50%;*/
}

#logo{
  height: 100%;
}

#title1{
  height: 50%;
  width: 100%; 
  //background: purple;
}
#title2{
  height: 25%; 
  width: 100%; 
  //background: pink;
}
#title3{
  height: 25%;
  width: 100%;
  //background: blue;
}
#title1 > p {margin: 0; height: 100%; font-size: 300%}
#title2 > p {margin: 0; height: 100%; font-size: 100%}
#title3 > p {margin: 0; height: 100%; font-size: 100%}

</style>
