<template>
  <div class='container'>
    <div class='row padded' v-for='(cat, index) in [this.web,this.ios,this.eng]' :key='index'>
      <div class="col">
        <div class="row">
          <div class="col h5 border-bottom">
            {{ getRowTitle(index) }}
          </div>
        </div>
        <div class="row">
          <div class='col-4' v-for='(pro, innerIndex) in cat' :key='innerIndex'>
            {{ pro.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'projects',
  data () {
    return {
      opentab: '',
      web: [
        {
          name: 'OSU Energy Dashboard',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'OSU Sustainability Map',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'OSU Carbon Calculator',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Brewjay',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Broganminer.com',
          description: '',
          link: '',
          images: []
        }
      ],
      ios: [
        {
          name: 'Rocket Pop',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Anchor',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Genous',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'CSwitcher',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Wave',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Sprint Timer',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'App Sort',
          description: '',
          link: '',
          images: []
        }
      ],
      eng: [
        {
          name: '3-Way Crossover',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'NES Controller Emulator',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Hexbot',
          description: '',
          link: '',
          images: []
        },
        {
          name: 'Touch Sensor',
          description: '',
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
    }
  }
}
</script>
<style scoped>
  .padded {
    margin: 1em;
  }
</style>
