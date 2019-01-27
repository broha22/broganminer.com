<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-01-26T17:20:20-08:00
-->

<template>
  <div class="container-fluid home" id='main'>
    <div class='row justify-content-md-center'>
      <div class='mainPageDirectory col-7'>
        <div class='row'>
          <div class='col-3'>
            <b-btn class='mainPageLink' href='#projects'>
              Projects
            </b-btn>
          </div>
          <div class='col-3'>
            <b-btn class='mainPageLink' href='#resume'>
              Resume
            </b-btn>
          </div>
          <div class='col-3'>
            <b-btn class='mainPageLink' href='https://github.com/broha22'>
                GitHub
            </b-btn>
          </div>
          <div class='col-3'>
            <b-btn class='mainPageLink' href='https://www.linkedin.com/in/broganminer/'>
                LinkedIn
            </b-btn>
          </div>
        </div>
      </div>
    </div>
    <div class='row'>
      <div class='mainPageName col-12'>
        <img class="mainPageCirlePic">
        <div class='mainPageNameText col-12'>
          Brogan Miner
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heatchart from '@/components/heatmap'
export default {
  name: 'home'
}
</script>

<style scoped lang='scss'>
@import '../custom.scss';
@import url('https://fonts.googleapis.com/css?family=Quicksand');
.home {
  height: 100%;
  width: 100%;
  padding: 0;
  background-image: linear-gradient(to bottom, rgba(26,26,26,0.7) 70%, rgba(26,26,26,1)), url('../../static/nav.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
  background-position: bottom;
  overflow: hidden;
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
  font-family: 'Quicksand', sans-serif;
}
$mainPageCirclePicSize: 250px;
.mainPageCirlePic {
  position: relative;
  z-index: 200;
  width: $mainPageCirclePicSize;
  height: $mainPageCirclePicSize;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  border-radius: 250px;
  border: 2px solid #FFF;
  background-image: url('../../static/me.png');
}

.mainPageDirectory {
  z-index: 0;
  padding-top: 10%;
  height: 250px;
}
.mainPageLink {
  padding: 20px !important;
  border-radius: 10px;
  cursor: pointer;
  background-color: #1a1a1a;
  color: #A1A1A1;
  overflow: hidden;
  font-size: 20px;
  line-height: 20px;
  font-family: 'Helvetica';
  text-align: center;
  border: none !important;
  width: 100% !important;
}
</style>
