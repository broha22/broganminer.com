<!--
@Author: Brogan Miner <Brogan>
@Date:   2019-03-13T16:46:17-07:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-03-13T21:06:35-07:00
-->

<template>
  <div class='row top'>
    <div class='col-12 mainArea'>
      <div class='row texture'>
        <div class='col-12 title'>
          <h2>{{ projects[activeIndex].name }}</h2>
        </div>
      </div>
      <div class='d-flex imageScroll'>
        <div class='inline' v-for='(image, index) of projects[activeIndex].images' :key='index'>
          <img :src='"/static/" + image' class='image' />
        </div>
      </div>
      <div class='row'>
        <div class='col-12 desc'>
          {{ projects[activeIndex].description }}
        </div>
      </div>
      <div class='row links'>
        <div class='inline' v-for='(link, index) of projects[activeIndex].links' :key='index'>
          <b-btn class='button' :href='link.href'>{{ link.text }}</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import projectJSON from '../assets/projects.json'
import bar from '@/components/bar'
export default {
  props: ['activeIndex'],
  components: {
    bar
  },
  data () {
    return {
      projects: projectJSON
    }
  },
  created () {

  }
}
</script>
<style scoped lang='scss'>
@import '../custom.scss';
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
.top {
  padding-left: 50px;
  padding-right: 50px;
}
.mainArea {
  background-color: $color-primary-3;
  padding: 1em;
  padding-top: 0;
  border: solid 2px $color-primary-4;
}
.image {
  max-height: 300px;
  width: auto;
  border: solid 2px $color-primary-4;
}
.inline {
  display: inline-block;
  padding-left: 20px;
}
.title {
  -webkit-text-stroke: 1px black;
  padding-bottom: 1em;
  padding-top: 0.5em;
}
.imageScroll {
  // padding-top: 1em;
  overflow-x: scroll;
}
.desc {
  color: $color-primary-4;
  font-size: 18px;
  padding-top: 1em;
  font-family: 'Ubuntu';
}
.links {
  padding-top: 1em;
}
.button {
  padding: 10px !important;
  border-radius: 0px;
  cursor: pointer;
  background-color: $color-primary-1;
  color: $color-primary-0;
  overflow: hidden;
  font-size: 30px;
  line-height: 20px;
  text-align: center;
  width: 100% !important;
  -webkit-text-stroke: 1px black;
  border: solid 2px $color-primary-4;
}
.button:hover {
  background-color: $color-primary-4;
  border: solid 2px $color-primary-1;
  color: $color-primary-0;
}
// .texture {
//   background-image: url('/static/texture.jpg');
//   background-repeat: repeat;
//   background-size: auto;
// }
</style>
