<template>
  <div class="sidebar">
      <sidebar-nav></sidebar-nav>
      <sidebar-skills></sidebar-skills>
      <sidebar-footer></sidebar-footer>
  </div>
</template>

<script>
import Nav from '../views/Sidebar/Nav'
import Skills from '../views/Sidebar/Skills'
import Footer from '../views/Sidebar/Footer'
export default {
    components: {
        sidebarNav: Nav,
        sidebarSkills: Skills,
        sidebarFooter: Footer
    }
}
</script>