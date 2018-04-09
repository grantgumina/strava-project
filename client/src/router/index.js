import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import NewMap from '@/components/NewMap'

Vue.use(Router)

// Routes for the application
export default new Router({
  routes: [
    // Homepage
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    // New map page
    {
      path:'/newmap',
      name: 'NewMap',
      component: NewMap
    }
  ]
})
