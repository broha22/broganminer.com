<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-01-26T17:16:21-08:00
-->

<template>
  <div class="container-fluid resume" id='resume'>
    <div class='row justify-content-md-center'>
      <div class='col-9 boundedBox'>
        <div class='row'>
          <div class='col-12 resumeHeading'>
            Resume
          </div>
        </div>
        <div class='row resumeContentRow'>
          <div class='col'>
            <div class='row'>
              <span class='contentTitle'>Work Experience</span>
            </div>
            <div class='row'>
              <div class='col'>
                <h1>Oregon State University Sustainability Office</h1>
                <h2>Student Software Systems Engineer</h2>
                <span class='contentText'>
                  At the OSU Sustainability Office I was in charge of maintaining and creating web applications that helped the university achieve goals associated with sustainability. The most notable projects were the Energy Dashboard and Carbon Footprint Calculator. The Energy Dashboard is a web application that allows real time utility tracking through data acquisition servers placed in various buildings on the OSU Corvallis campus. This project was also selected to be presented at WOHESC 2019. More on this project is available in the project sections of this website. Additionally, my duties included maintaining the infrastructure of our web applications. This included creating and updating policies for software development in the office. Testing procedure were put into place as well as a continuos integration system via Travis CI. My work here also contained elements of maintaining databases and working closely with AWS.
                </span>
              </div>
              <div class='col'>
                <div class='col'>
                  <h1>Graton's Custom Landscapes</h1>
                  <h2>Laborer</h2>
                  <span class='contentText'>
                    My work at Graton's Custom Landcapes was done over two summers, going into my Freshman and Sophomore years of college. In this line of work I learned many skills relevant to construction. From reading blueprints to operating heavy machinery my line of work varied greatly. Most notable were my skills I developed in terms of communication and work ethic. For communication I had to often speak to various clients and ensure that our work was satisfactory to their needs. This also included talking about maintenance of the systems we installed. During this position a strong work ethic was also needed, there is a limited amount of time one can do large landscaping projects in Oregon. This led to many long and hot summer work days.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row resumeContentRow'>
          <div class='col'>
            <div class='row'>
              <span class='contentTitle'>Education</span>
            </div>
            <div class='row'>
              <div class='col'>
                <h1>Oregon State University</h1>
                <h2>B.S. Electrical and Computer Engineering</h2>
                <span class='contentText'>
                  Currently I am pursuiing my Bachelors of Science at Oregon State University. I plan to graduate in Spring 2020 with a Major in Electrical and Computer Engineering and a Minor in Computer Science. My current GPA is 3.47 out of 4.00.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class='row resumeContentRow'>
          <div class='col'>
            <div class='row'>
              <span class='contentTitle'>Technical Skills</span>
            </div>
            <div class='row'>
              <div class='col'>
                <span class='contentText'>
                  C/C++, Python, HTML/CSS, JavaScript, MySQL, git, Objective-C, System Verilog, Node.js, LATex, Express, Vue.js, AWS, Digital Logic, Electronics, Assembly Language (AVR)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume'
}
</script>

<style scoped lang='scss'>
@import '../custom.scss';
@import url('https://fonts.googleapis.com/css?family=Quicksand');
.resume {
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.boundedBox {
  border-radius: 10px;
  margin-top: 90px;
  background-color: $color-primary-1;
  color: $dark;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.resumeHeading {
  font-size: 23px;
  border-bottom: solid 1px lighten($color-primary-0, 25%);
  width: calc(100% - 30px);
}
.resumeContentRow {
  font-size: 18px;
}
.resumeContentRow .col > h1 {
  font-size: 16px;
}
.resumeContentRow .col > h2 {
  font-size: 14px;
  font-style: italic;
}
.contentTitle {
  font-size: 20px;
  padding: 10px;
}
.contentText {
  font-size: 12px;
  line-height: 0.5 !important;
}
</style>
