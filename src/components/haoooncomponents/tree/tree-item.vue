<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="makeFolder">
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
      {{ item.info.name }}
      <span v-bind:style="{ color:getColor(item.info.health)  }">
        <strong>{{ item.info.health }}</strong>
      </span>
      <button @click.stop="shutdown(item.info.key)" >shut down</button>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(child, index) in item.info.kids"
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
    item: Object
  },
  data: function () {
    return {
      isOpen: false,
      itemdata: this.item
    }
  },
  computed: {
    isFolder: function () {
      return this.item.info.kids &&
        this.item.info.kids.length
    }
  },
  methods: {
    getColor:function (health){
      if(health >= 95 && health <= 100){
        return "#41b883";
      }if(health >= 80 && health < 95){
        return "#e75e30";
      }
    },
    shutdown:function (key){
      // alert(key)
      console.log(this.item)
      fetch(GATEWAY + "/suspend?key=" + key, {method: 'GET'}) 
      .then(response => response.json())
      .then(data => {
        // console.log(data["kids"])
        console.log("shutdown")
        // this.$emit('set-tree-data', data)
        this.item = data
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
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
</style>
