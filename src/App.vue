<template>
  <div id="app">
    <div class="container" :class="{grid: isLarge}">
      <div class="sidebar" v-if="isLarge">
        <app-sidebar></app-sidebar>
      </div>
      <div class="contents" v-if="isLarge">
        <transition name="router-anim" enter-active-class="animated fadeInRight">
          <router-view></router-view>
        </transition>
      </div>
      <div class="contents-2" v-else>
        <app-experience></app-experience>
        <app-uiux></app-uiux>
        <app-resume></app-resume>
        <app-skills></app-skills>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Experience from './views/Experience.vue'
import Resume from './views/Resume.vue'
import Uiux from './views/Uiux.vue'

import Skills from './views/Sidebar/Skills'

import {mapState, mapActions} from 'vuex'
export default {
  components: {
    appSidebar: Sidebar,
    appExperience: Experience,
    appResume: Resume,
    appUiux: Uiux,
    appSkills: Skills,
  },
  computed: {
    ...mapState([
      'window',
      'isLarge'
    ]),
  },
  created() {
    window.addEventListener('resize', this.handResize)
    this.handResize()
  },
  methods: {
    ...mapActions([
      'handResize'
    ])
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>
