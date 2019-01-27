<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-01-26T16:17:20-08:00
-->
<template>
  <div id="app">
    <home />
    <resume />
    <projects />
  </div>
</template>

<script>
import home from '@/components/main'
import resume from '@/components/resume'
import projects from '@/components/projects'
export default {
  name: 'App',
  components: {
    home,
    resume,
    projects
  },
  data () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style scoped lang='scss'>
#app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>
