<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-01-26T17:16:15-08:00
-->

<template>
  <div class='projects container-fluid' id='projects'>
    <div class='row'>
      <div class='col projectTitle'>
        Projects
      </div>
    </div>
    <div class='d-inline-flex p-2 flex-row projectScroller'>
      <div v-for='(project,index) in projects' :class="[currentProject === index ? 'card active' : 'card']"  :key='index' style='width: 18rem; height: 12rem' @click='currentProject = index'>
        <img class="card-img-top" :src="project.images[0]" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">
            {{ project.name }}
          </h5>
        </div>
      </div>
    </div>
    <div class='row projectInfo'>
      <div class='col-6'>
        <b-carousel :interval="4000" controls indicators>
          <b-carousel-slide v-for='(image, index) in projects[currentProject].images' :img-src='image' :key='index' alt="slide" />
        </b-carousel>
      </div>
      <div class='col-6 projectDescription'>
        <h2 class='showTitle'>
          {{ projects[currentProject].name }}
        </h2>
        {{ projects[currentProject].description }}
        <br>
        <span class='projectLink' v-if='projects[currentProject].link !== ""'>
          <b-btn :href='projects[currentProject].link'>
            Project Link
          </b-btn>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'projects',
  mounted () {
  },
  data () {
    return {
      currentProject: 0,
      projects: [
        {
          name: 'OSU Energy Dashboard',
          images: ['/static/dashboard2.png', '/static/dashboard1.png', '/static/dashboard0.png'],
          link: 'https://github.com/OSU-Sustainability-Office/energy-dashboard',
          description: 'This project utilizes data acquisition servers in campus buildings to display utility usage in real time. The project consists of a front end written with Vue.js and a backend written with Node.js. The application utilizes a restful interface for data retrieval and creation. Full documentation is available at the github link below.'
        }
    //     {
    //       name: 'OSU Carbon Calculator',
    //       images: [],
    //       link: '',
    //       description: ''
    //     },
    //     {
    //       name: 'HexRobot',
    //       images: [],
    //       link: '',
    //       description: ''
    //     },
    //     {
    //       name: 'Discrete DRAM Module',
    //       images: [],
    //       link: '',
    //       description: ''
    //     },
    //     {
    //       name: 'SNES Controller Interperter',
    //       images: [],
    //       link: '',
    //       description: ''
    //     }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
@import '../custom.scss';
@import url('https://fonts.googleapis.com/css?family=Quicksand');
.projects {
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: $color-primary-1;
  overflow: hidden;
}
.row {
  padding: 20px;
}
.card {
  margin-right: 20px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 10px;
}
.card-img-top {
  padding: 10px;
  width: auto;
  max-height: 140px;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.card-title {
  font-size: 18px;
}
.flex-row {
  width: 100%;
  overflow-x: scroll;
}
.projectInfo {
  background-color: $color-primary-3;
  position: absolute;
  bottom: 0;
}
.projectTitle {
  color: $color-primary-4;
  font-size: 35px;
  border-bottom: solid 1px lighten($color-primary-0, 25%);
}
.projectLink {
  text-align: center;
  position: relative;
  padding-top: 40px;
  display: block;
}
.showTitle {
  border-bottom: solid 1px $color-primary-4;
  padding-bottom: 10px;
}
.card.active {
  border: solid 2px $color-primary-4;
}
</style>
