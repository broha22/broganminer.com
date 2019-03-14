<!--
@Author: Brogan Miner <Brogan>
@Date:   2019-03-13T16:11:34-07:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-03-13T17:58:28-07:00
-->

<template>
  <div class='row'>
    <div v-for='(project, index) in projects' :key='index' class='inline'>
      <b-btn :class='[(activeIndex === index) ? "button selected" : "button"]' @click='$emit("selection", index)'>{{ project.name }}</b-btn>
    </div>
  </div>
</template>
<script>
import projectJSON from '../assets/projects.json'
export default {
  props: ['activeIndex'],
  data () {
    return {
      projects: projectJSON
    }
  },
  methods: {
    clicked: function (ar) {
      this.activeIndex = ar
      this.$emit('changeProject', ar)
    }
  }
}
</script>
<style scoped lang='scss'>
@import '../custom.scss';
.row {
  position: relative;
  bottom: 40px !important;
}
.inline {
  padding-left: 10px;
}
.selected {
  background-color: $color-primary-2 !important;
  color: $color-primary-3 !important;
  border: solid 2px $color-primary-3 !important;
}
.button {
  border-radius: 0px;
  cursor: pointer;
  background-color: $color-primary-1;
  color: $color-primary-0;
  overflow: hidden;
  font-size: 22px;
  text-align: center;
  -webkit-text-stroke: 1px black;
  border: solid 2px $color-primary-4;
}
.button:hover {
  background-color: $color-primary-4;
  border: solid 2px $color-primary-1;
  color: $color-primary-0;
}
</style>
