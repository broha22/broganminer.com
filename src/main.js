/**
 * @Author: Brogan Miner <Brogan>
 * @Date:   2018-08-07T16:06:36-07:00
 * @Email:  brogan.miner@oregonstate.edu
 * @Last modified by:   Brogan
 * @Last modified time: 2019-01-26T15:33:04-08:00
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import VueGithubActivity from 'vue-github-activity'
import VueAnime from 'vue-animejs'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'

Vue.use(BootstrapVue)
Vue.use(VueGithubActivity)
Vue.use(VueAnime)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
