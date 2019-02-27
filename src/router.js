import Vue from 'vue'
import Router from 'vue-router'
import Announcement from './views/Announcement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'announcement',
      component: Announcement
    }
  ]
})
