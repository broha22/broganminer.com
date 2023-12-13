/**
 * @Author: Brogan Miner <Brogan>
 * @Date:   2018-12-14T15:36:57-08:00
 * @Email:  brogan.miner@oregonstate.edu
 * @Last modified by:   Brogan
 * @Last modified time: 2019-01-26T15:32:51-08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import workouts from '@/components/workouts'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: main },
    { path: '/workouts', component: workouts }
  ]
})
