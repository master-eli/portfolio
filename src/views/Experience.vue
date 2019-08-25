<template>
    <div class="projects padding-sides mt-md center">
        <div class="heading exp" v-if="!isLarge">
            <h1 class="bold exp">Experience</h1>
        </div>
        <ul class="project-list" :class="{ 'container-sm': !isLarge }">
            <li class="project-list-group">
                <h2 class="medium saririt">"Saririt" Mobile Application for pre-school using supervised learning</h2>
                <p class="project-role regular">Front-end / Back-end Developer <span class="tag"><a href="https://github.com/master-eli/Saririt">Git Repo</a></span></p>
            </li>
            <li class="project-list-group">
                <h2 class="medium casi">College of arts and sciences inventory system</h2>
                <p class="project-role regular">Front-end / Back-end Developer <span class="tag"><a href="https://github.com/master-eli/JAS">Git Repo</a></span></p>
            </li>
            <li class="project-list-group">
                <h2 class="medium jas">Web-based JAS Construction Stock Management System</h2>
                <p class="project-role regular">Front-end / Back-end Developer <span class="tag"><a href="https://github.com/master-eli/CAS-Listings">Git Repo</a></span></p>
            </li>
            <li class="project-list-group">
                <h2 class="medium sanut">Sanut Ilokano</h2>
                <p class="project-role regular">Artist / Animator <span class="tag"><a href="https://play.google.com/store/apps/details?id=net.orangefix.sanut_ilokano&hl=en">Play Store</a></span></p>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'isLarge'
        ])
    }
}
</script>
