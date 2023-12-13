<!--
@Author: Brogan Miner <Brogan>
@Date:   2018-12-14T15:36:57-08:00
@Email:  brogan.miner@oregonstate.edu
@Last modified by:   Brogan
@Last modified time: 2019-04-11T16:35:31-07:00
-->
<!--
  Example URL: http://brogans-mbp:8080/#/workouts?name=Beast%20Mode&exercises=3x8%20Back%20Squat%2C3x8%20Lawn%20Mower%3B3x8%20Bent%20Over%20Row%2C3x8%20Lunges%3B3x8%20Power%20Clean%3B3x8%20Flat%20Bench%2C3x8%20Skull%20Crusher%3B3x8%20Lat%20Pull%2C3x8%20Bicep%20Curl%3B3x8%20Dead%20Lifts
-->
<template>
  <div class="page">
    <b-container>
      <b-row class="title">
        <b-col>{{ etitle }}</b-col>
      </b-row>
    </b-container>
    <b-container class="supersetwrapper" v-for="(ss, index) in supersets" :key="index">
      <b-row v-if="ss.length > 1">
        <b-col class="sslabel">Super Set</b-col>
      </b-row>
      <b-row v-for="(exer, eindex) in ss" :key="eindex" :class="textrowClasses(ss.length, eindex)">
        <b-col @click="toggleEmoji(exer)" >{{ exer.name }}<span v-if="exer.done === 1">{{ " " + emoji}}</span></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'workouts',
  components: {
  },
  data () {
    return {
      etitle: '',
      supersets: [],
      emojis: ['\uD83D\uDC2D', '\uD83E\uDD92'],
      emoji: ''
    }
  },
  methods: {
    textrowClasses: (length, index) => {
      let rclasses = 'text-row'
      if (index === 0) {
        rclasses += ' top'
      }

      if (index === length - 1) {
        rclasses += ' bottom'
      } else {
        rclasses += ' bordered'
      }

      return rclasses
    },
    toggleEmoji: (exer) => {
      if (exer.done === 0) {
        exer.done = 1
      } else {
        exer.done = 0
      }
    }
  },
  mounted () {
    this.etitle = this.$route.query.name

    this.emoji = this.emojis[0]
    console.log(this.emoji)

    let tempSupersets = this.$route.query.exercises.split(';')
    for (let j = 0; j < tempSupersets.length; j = j + 1) {
      if (tempSupersets[j] !== '') {
        this.supersets.push(tempSupersets[j].split(',').map((x) => { return { name: x, done: 0 } }))
      // this.supersets[j].pop()
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  .home {
    background-color: #dddddd;
  }
  .title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
  .page {
    padding-top: 20px;
    width: 100%;
    height: 100%;
    background-color: #dddddd;
    color: black;
    font-family: sans-serif;
    padding-left: 20px;
    padding-right: 20px;
  }

  .text-row {
    background-color: white;
    padding: 5px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .text-row:active {
    background-color: #eeeeee;
  }

  .sslabel {
    color: #666666;
  }

  .showEmoji {
    background-color: red;
  }

  .supersetwrapper {
    padding-top: 10px;
    border-radius: 5px;
    overflow: hidden;
  }

  .text-row.bordered {
    border-bottom: #aaaaaa 1px solid;
  }

  .text-row.top {
    border-radius: 5px 5px 0px 0px;
  }

  .text-row.bottom {
    border-radius: 0px 0px 5px 5px;
  }

  .text-row.top.bottom {
    border-radius: 5px 5px 5px 5px;
  }
</style>
