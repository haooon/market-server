<template>
  <li>
    <div :class="{bold: isFolder}">
      <span @click="toggle" v-if="isFolder">[{{ isOpen ? '‐' : '+' }}]</span>
      <span @click="detail(itemData.info)" >{{ itemData.info.name }}</span>
      <span v-bind:style="{ color:this.$tools.getColor(itemData.info.health, itemData.info.status)  }">
        <strong style="width: 50px;">{{ itemData.info.health }}</strong>
      </span>
      <span 
        class="card" 
        v-bind:style="{ backgroundColor:this.$tools.getStatusColor(itemData.info.status)}"
        @click.stop="stop($event, itemData.info.status, itemData.info.key)">&nbsp;{{transStatus(itemData.info.status)}}&nbsp;</span>
      <!-- <div @mouseout="leave" @mouseover="showTitle($event, 'suspend')" class="card inline" style="background-color: #cc0000;" @click.stop="shutdown(itemData.info.key)" ></div>
      <div @mouseout="leave" @mouseover="showTitle($event, 'restart')" class="card inline" style="background-color: #7ed321;" @click.stop="shutdown(itemData.info.key)" ></div> -->
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        v-for="(child, index) in itemData.info.kids"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
      <!-- <li class="add" @click="$emit('add-item', item)">+</li> -->
    </ul>
  </li>
</template>

<script>
export default {
  name: 'tree-item',
  props: {
    item: Object,
  },
  data: function () {
    return {
      isOpen: false,
      itemData: this.item
    }
  },
  watch: {
    item(val) {
      this.itemData = this.item;
    }
  },
  computed: {
    isFolder: function () {
      return this.item.info.kids &&
        this.item.info.kids.length
    }
  },
  methods: {
    detail:function(info){
      this.$store.commit("setInfo", info)
    },
    transStatus:function(code){
      if(code == "SUSPEND"){
        return "已挂起"
      }if(code == "RUNNING"){
        return "运行中"
      }
    },
    stop:function(e, status, key){
      if(status == "SUSPEND"){
        this.restart(key)
      }if(status == "RUNNING"){
        this.shutdown(key)
      }
    },
    showTitle:function(e, title){
      console.log(e.currentTarget)
      e.currentTarget.innerHTML = title
      // .text(title)
      // console.log(this)
    },
    leave:function(e){
      e.currentTarget.innerHTML = ""
    },
    shutdown:function (key){
      console.log(this.item)
      fetch(GATEWAY + "/suspend?key=" + key, {method: 'GET'}) 
      .then(response => response.json())
      .then(data => {
        this.itemData = data
      })
    },
    restart:function (key){
      console.log(this.item)
      fetch(GATEWAY + "/restart?key=" + key, {method: 'GET'}) 
      .then(response => response.json())
      .then(data => {
        this.itemData = data
      })
    },
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  },
  mounted:function(){
    this.itemData = this.item
  }
}
</script>

<style scoped>
.inline{
  display:block;
}
.card{
  /*transition: all 0.2s linear;*/
  margin-left: 5px;
  border-radius:7px; 
  font-size:15px; 
  line-height: 0px; 
  text-align:center;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
</style>
