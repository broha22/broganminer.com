<template>
  <div class="container">
    <div class="row">
      <div class="col h2 text-left border-bottom">
        About Me
      </div>
    </div>
    <div class="row">
      <div class="col-4 border-right">
        <div class="row">
          <div class="col h6">
            Education
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img class="brandImage" src='static/OSU_vertical_1C_B.png' />
          </div>
        </div>
        <div class="row">
          <div class="col text-left">
            <ul>
              <li><span class="bold">Oregon State University 2020</span></li>
              <li> B.S. Electrial and Computer Engineering</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col h6 border-top">
            Personal
          </div>
        </div>
        <div class="row">
          <div class="col text-left work">
            I am 21 years old from the state of Oregon. I became passionate in technology from a young age and started programming when I was 14. I continue to pursue this passion. Currently I am a Junior at Oregon State University with plans to graduate in June of 2020.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col h5">
            Work Experience
          </div>
        </div>
        <div class="row">
          <div class="col border-right">
            <div class="row">
              <div class="col">
                <img class="brandImage" src='static/gratons.png' />
              </div>
            </div>
            <div class="row">
              <div class="col text-left work">
                <ul>
                  <li><span class="bold">Graton's Custom Landscapes</span></li>
                  <li>Laborer</li>
                  <li>&nbsp;</li>
                  <li>I was employed at Graton's for the summers of 2016 & 2017. My duties ranged from operating machinery to repairing irrigation systems.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col">
                <img class="brandImage" src='static/sus.png' />
              </div>
            </div>
            <div class="row">
              <div class="col text-left work">
                <ul>
                  <li><span class="bold">Oregon State University Sustainability Office</span></li>
                  <li>Student Software Systems Engineer</li>
                  <li>&nbsp;</li>
                  <li>Currently I am employed with the Sustainability Office at OSU. In this position my duties mostly include web development. I am responsible for web applications deemed neccessary to make for our department these include the Carbon Footprint Calculator and the Campus Energy Dashboard. Other responsibilites include outreach and data collection.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div clas="col">
        <button type="button" class="btn btn-primary" v-on:click='sendIt()'>View Full Resume</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  },
  methods: {
    sendIt: function () {
      this.$router.push('/pdf/resume.pdf')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h2, .h5 {
  margin: 1em;
}
.h6 {
  margin: 1em;
  padding-top: 2em;
}
.brandImage {
  height: 100px;
  width: auto;
  margin-bottom: 1em;
}
ul {
  list-style-type: none;
}
.bold {
  font-weight: bold;
}
.work {
  margin: 1em;
}
</style>
