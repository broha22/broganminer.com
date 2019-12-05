<!--
@Author: Brogan Miner <Brogan>
@Date:   2019-03-13T15:29:25-07:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-03-13T21:02:11-07:00
-->

<template>
  <div class='row'>
    <div class='col-12'>
      <div v-for='i of Array(12)' :key='i' class='row bar' :style='"background-color: " + color' ref='bar'>
        &nbsp;
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['color'],
  mounted () {
    // maxHeight 200px
    // 20 elements
    let index = 0
    let accmHeight = 0
    for (let bar of this.$refs.bar) {
      let height = 199 / 15 * (1 - index / 12)
      bar.style.height = height.toString() + 'px'
      bar.style.top = accmHeight.toString() + 'px'
      accmHeight += height * (index / 12 + 0.1)

      index++
    }
  }
}
</script>
<style scoped lang='scss'>
@import '../custom.scss';
.row {

}
.bar {
  background-color: $color-primary-2;
  position: relative;
  border-top: solid 1px white;
  border-bottom: solid 1px white;
}
.bar:nth-of-type(12) {
  display: none;
}
</style>
