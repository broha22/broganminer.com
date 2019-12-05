<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-04-11T16:35:31-07:00
-->

<template>
  <div class="container-fluid home" id='main'>
    <div class='row' style='height: 100%'>
      <div class='mainPageDirectory col-lg-3'>
        <div class='row texture top'>
        </div>
        <div class='row start'>
          <div class='mainPageNameText col-12'>
            <h2>Brogan Miner</h2>
          </div>
        </div>
        <div class='row' >
          <div class='spinner' ref='spinMe'>
            <div class='mainPageTriangleOutline'>
              <img class="mainPageTrianglePic">
            </div>
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
        <div class='row texture bottom'>
        </div>
      </div>
      <div class='col-lg-9'>
        <bar color='#05ffa1' />
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
import projectViewer from '@/components/projectViewer'
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
  },
  mounted () {
    let deg = 0
    let spin = () => {
      if (!this.$refs.spinMe.style) return
      this.$refs.spinMe.style['-webkit-transform'] = 'rotateY(' + deg + 'deg)'
      deg = deg + 15
      setTimeout(() => { spin() }, 500)
    }
    this.$nextTick(() => {
      spin()
    })
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
.spinner {
  position: relative;
  width: 300px;
  left: calc(50% - 150px);
  transition: transform 500ms linear;
  transform-style: preserve-3d;
}
.mainPageTriangleOutline {
  position: relative;
  top: -20px;
  left: calc(50% - 130px);
  -webkit-clip-path: polygon(50% 100%, 0 10%, 100% 10%);
  clip-path: polygon(50% 100%, 0 10%, 100% 10%);
  height: 260px;
  width: 260px;
  background-color: $color-primary-4;
  transform-style: preserve-3d;
}
.spinner:after {
  background-color: $color-primary-4;
  bottom: 0;
  content: '';
  position: absolute;
  left: 83px;
  top: 0;
  width: 10px;
  z-index: 0;
  transform: rotateY(90deg) rotateX(30deg);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
}
// .spinner:before {
//   background-color: $color-primary-4;
//   bottom: 0;
//   content: '';
//   position: absolute;
//   right: 83px;
//   top: 0;
//   width: 10px;
//   z-index: 0;
//   transform: rotateY(90deg) rotateX(150deg);
//   transform-style: preserve-3d;
//   transform-origin: 50% 50%;
// }
.mainPageTriangleOutline:before {
  position: absolute;
  left: 0;
  z-index: 2;
  // -webkit-clip-path: polygon(50% 100%, 0 10%, 100% 10%);
  // clip-path: polygon(50% 100%, 0 10%, 100% 10%);
  height: 260px;
  width: 260px;
  background-color: $color-primary-4;
  transform: translateZ(25px);
  content: '';
}
.mainPageTrianglePic {
  position: absolute;
  top: 3.4px;
  left: 5px;
  z-index: 200;
  width: calc(100% - 10px);
  height: 250px;
  -webkit-clip-path: polygon(50% 100%, 0 10%, 100% 10%);
  clip-path: polygon(50% 100%, 0 10%, 100% 10%);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  background-image: url('../../static/me.png');
  transform-style: preserve-3d;
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
.texture {
  height: 114.5px;
  position: absolute;
  width: 100%;
  background-image: url('/static/texture.jpg');
  background-repeat: repeat;
  background-size: auto;
}
.texture.top {
  top: 0;
  border-bottom: solid 2px $color-primary-4;
}
.texture.bottom {
  bottom: 0;
  border-top: solid 2px $color-primary-4;
}
.start {
  padding-top: 114.5px;
}
</style>
