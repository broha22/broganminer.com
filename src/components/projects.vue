<template>
  <div class='container'>
    <b-card no-body class='mb-1' v-for='(cat, index) in [this.web,this.ios,this.eng]' :key='index' ref='card'>
      <b-card-header header-tag='header' class='p-1' role='tab'>
        <b-btn block href="#" v-b-toggle='"accordion" + index' variant="info">{{ getRowTitle(index) }}</b-btn>
      </b-card-header>
      <b-collapse :id='"accordion" + index' role="tabpanel" accordion='accordion'>
        <b-card-body>
          <b-tabs class='tab'>
            <b-tab v-for='(pro, ip) in cat' :key='ip' :title='pro.name'>
              <div class='container'>
                <div class='row'>
                  <div class='col'>
                    {{ pro.description }}
                  </div>
                </div>
                <div class='row'>
                  <div class='col'>
                    <b-button v-if='pro.link !== ""' :href='pro.link'>View Project</b-button>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'projects',
  mounted () {
    this.update()
  },
  data () {
    return {
      web: [
        {
          name: 'OSU Energy Dashboard',
          description: 'The OSU Energy dashboard analyzes building data in real time. Data is captured by Acquisuites in select buildings of the OSU campus and then sent to our  MySQL database. The data is easily accessed through an API and then visualized within a Vue.js front end application.',
          link: 'https://github.com/OSU-Sustainability-Office/energy-dashboard',
          images: []
        },
        {
          name: 'OSU Sustainability Map',
          description: 'The OSU Sustainability Map shows sustainable features on the OSU campus. The application uses Vue.js and Leaflet to display data collected in geojson files.',
          link: 'https://github.com/OSU-Sustainability-Office/sustainability_map',
          images: []
        },
        {
          name: 'OSU Carbon Calculator',
          description: 'The OSU Carbon Calculator is a project that estimates the carbon footprint of an individual. The calculator is based of Santa Clara University\'s calculator but features some adjustments.',
          link: 'https://github.com/OSU-Sustainability-Office/osu_carbon_calculator_update_project',
          images: []
        },
        {
          name: 'Broganminer.com',
          description: 'Broganminer.com is a simple Vue.js website featuring some of my projects and a little about myself.',
          link: 'https://github.com/broha22/broganminer.com',
          images: []
        }
      ],
      ios: [
        {
          name: 'Rocket Pop',
          description: 'Rocket Pop was the first application I published into the appstore. It was a simple game which featured rockets descednign down upon a town. The application was written in Swift, which was relatively new at the time. The game featured a simple scoreboard, multiple rockets and a day/night transition.',
          link: '',
          images: []
        },
        {
          name: 'Anchor',
          description: 'Anchor was a successful paid iOS system extension (26,000+ purchases) that allowed for a freedom of icon movement on the iOS home screen. It also featured custom layouts for landscape/portrait orientation that could be backed up in the settings application and a custom DRM scheme.',
          link: 'https://github.com/broha22/Anchor',
          images: []
        },
        {
          name: 'Genous',
          description: 'Genous was an iOS system extension built to work with Anchor. It allowed for more custimization on ones homescreen. This extension gave the abilty to differentiate column number, row number, padding sizes and icon sizes of individual pages of the iOS home screen. It was able to do this with advanced Obj-C runtime features.',
          link: 'https://github.com/broha22/Genous',
          images: []
        },
        {
          name: 'CSwitcher',
          description: 'A simple and elegant replacement to the normal iOS switcher. This extension would place the App Switcher into the control center and unify an exprience of control.',
          link: 'https://github.com/broha22/CSwitcher',
          images: []
        },
        {
          name: 'Wave',
          description: 'A simple extension that used lower level iOS API for screen waking. The idea was to use the light sensor on iOS devices to detect a sudden wave of a hand over the device. Of course, the accuracy at lower light levels was not very good.',
          link: 'https://github.com/broha22/Wave',
          images: []
        },
        {
          name: 'Sprint Timer',
          description: 'Sprint Timer used the accelerometer in an iOS Device to detect the start of a run or sprint. The user would prime the device by clicking the button, once the button was held a swift arm movement would start the timer, when the finger was released the timer would stop.',
          link: 'https://github.com/broha22/Sprint-Timer',
          images: []
        },
        {
          name: 'App Sort',
          description: 'App Sort incorporated Lua scripts to sort applications on a users iOS decvice. Given metrics on each icon would be sent to the script chosen to sort by and it would be up to that script to decide the order. The iOS homescreen would refelct the change and place the icons in the order. Given scripts included Alphabetical and Color.',
          link: 'https://github.com/broha22/appsort',
          images: []
        }
      ],
      eng: [
        {
          name: '3-Way Crossover',
          description: 'This was a project for Electrical Fundamentals II. First Order filters were used in the design. It featured a per channel gain and visualizer for each channel.',
          link: 'https://broganminer.com/#/pdf/crossover.pdf',
          images: []
        },
        {
          name: 'NES Controller Emulator',
          description: 'This was a project for Digital Logic Design. The premise was to design and simulate System Verilog code that would interpret different input signals into something readable by a NES Console. ',
          link: 'https://broganminer.com/#/pdf/nes.pdf',
          images: []
        },
        {
          name: 'Hexbot',
          description: 'This is an ongoing project of a custom robot with six legs and 18 servos. The bot models its walking from an ant.',
          link: '',
          images: []
        },
        {
          name: 'Touch Sensor',
          description: 'This is an ongoing project that uses MPR121 touch sensors, LEDs and Acrylic. The Acrylic and LEDs are positioned and used to determine an On and Off state similar to that of a Nixie Tube.',
          link: '',
          images: []
        }
      ],
      wood: [
        {
          name: 'Bench',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Night Stand',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Cutting Boards',
          description: '',
          link: '',
          images: []
        }
      ]
    }
  },
  methods: {
    getRowTitle: function (int) {
      if (int === 0) {
        return 'Web Development'
      } else if (int === 1) {
        return 'iOS Development'
      } else if (int === 2) {
        return 'Computer Engineering'
      } else if (int === 3) {
        return 'Woodworking'
      }
    },
    update: function () {
      if (this.$route.params.cat) {
        switch (this.$route.params.cat) {
          case 'web':
            break
          case 'ios':
            break
          case 'ce':
            break
          default:
            break
        }
      }
    }
  }
}
</script>
<style>
.tab ul a {
  color: black !important;
}
</style>
<style scoped>
  .tab-content .row {
    margin: 1em;
  }

  a {
    background-color: #4e4e4e;
    border-color: #444;
  }
  a:hover {
    background-color: #5e5e5e;
    border-color: #555;
  }
</style>
