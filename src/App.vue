<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-04-11T14:06:10-07:00
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style>
  body {
    -webkit-transform: perspective(500px);
    -webkit-transform-style: preserve-3d;
  }
</style>
<style scoped lang='scss'>
@import './custom.scss';
#app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $color-primary-0;
}
</style>
