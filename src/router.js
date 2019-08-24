import Vue from 'vue'
import Router from 'vue-router'

// Views
import App from './App.vue'
import Home from './views/Home.vue'
import Experience from './views/Experience.vue'
import Resume from './views/Resume.vue'
import Uiux from './views/Uiux.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/uiux-designs',
      name: 'uiux',
      component: Uiux
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
  ]
})
