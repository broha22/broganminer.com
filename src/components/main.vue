<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-03-13T18:00:01-07:00
-->

<template>
  <div class="container-fluid home" id='main'>
    <div class='row' style='height: 100%'>
      <div class='mainPageDirectory col-lg-3'>
        <div class='row'>
          <div class='mainPageNameText col-12'>
            <h2>Brogan Miner</h2>
          </div>
        </div>
        <div class='row'>
          <div class='mainPageTriangleOutline'>
            <img class="mainPageTrianglePic">
          </div>
        </div>
        <div class='row linkRow'>
          <div class='col-12'>
            <b-btn class='mainPageLink' href='/static/resume.pdf'>
              Resume
            </b-btn>
          </div>
        </div>
        <div class='row linkRow'>
          <div class='col-12'>
            <b-btn class='mainPageLink' href='https://github.com/broha22'>
              GitHub
            </b-btn>
          </div>
        </div>
        <div class='row linkRow'>
          <div class='col-12'>
            <b-btn class='mainPageLink' href='https://www.linkedin.com/in/broganminer/'>
              LinkedIn
            </b-btn>
          </div>
        </div>
      </div>
      <div class='col-lg-9'>
        <bar />
        <div class='row projectTitleRow'>
          <div class='col-12 projectTitle'>
            <h1>Projects</h1>
          </div>
        </div>
        <div class='row'>
          <div class='col-12'>
            <projectSelector :activeIndex='activeIndex' @selection='activeIndex = $event'/>
          </div>
        </div>
        <div class='row'>
          <div class='col-12'>
            <projectViewer :activeIndex='activeIndex' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar from '@/components/bar'
import projectSelector from '@/components/projectselector'
import projectViewer from '@/components/projectviewer'
export default {
  name: 'home',
  components: {
    bar,
    projectSelector,
    projectViewer
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
@import '../custom.scss';
.home {
  background-color: $color-primary-0;
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  overflow-x: hidden;
}
.mainPageName {
  top: 35%;
  text-align: center;
  font-size: 52px;

}
.mainPageNameText {
  text-align: center;
  padding: 0;
  margin: 0;
  -webkit-text-stroke: 1px black;
}
.mainPageTriangleOutline {
  position: relative;
  left: calc(50% - 130px);
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  height: 260px;
  width: 260px;
  background-color: $color-primary-4;
}
.mainPageTrianglePic {
  position: absolute;
  top: 3px;
  left: 5px;
  z-index: 200;
  width: calc(100% - 10px);
  height: 250px;
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  background-image: url('../../static/me.png');
}

.mainPageDirectory {
  padding: 1em;
  background-color: $color-primary-3;
  height: 100%;
  border: solid 2px $color-primary-4;
}
.mainPageLink {
  padding: 20px !important;
  border-radius: 0px;
  cursor: pointer;
  background-color: $color-primary-1;
  color: $color-primary-0;
  overflow: hidden;
  font-size: 43px;
  line-height: 20px;
  text-align: center;
  width: 100% !important;
  -webkit-text-stroke: 1px black;
  border: solid 2px $color-primary-4;
}
.mainPageLink:hover {
  background-color: $color-primary-4;
  border: solid 2px $color-primary-1;
  color: $color-primary-0;
}

.linkRow {
  padding: 1em;
}

h1 {
  color: $color-primary-4;
  -webkit-text-stroke: 1px black;
  font-size: 62px;
}

.projectTitleRow {
  position: relative;
  bottom: 50px;
}

.projectTitle {
  padding-left: 50px;
}
</style>
