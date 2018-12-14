import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import about from '@/components/about'
import pdfviewer from '@/components/pdfviewer.vue'
import projects from '@/components/projects.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/pdf/:src',
      name: 'pdf',
      component: pdfviewer
    },
    {
      path: '/projects/',
      name: 'projects',
      component: projects
    },
    {
      path: '/projects/:cat',
      component: projects
    }
  ]
})
