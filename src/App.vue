<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-03-13T17:00:35-07:00
-->
<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from '@/components/main'
export default {
  name: 'App',
  components: {
    home
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
