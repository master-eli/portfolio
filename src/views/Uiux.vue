<template>
    <div>
        <div class="heading uiux" v-if="!isLarge">
            <h1 class="bold uiux">UI / UX Design</h1>
        </div>
        <div class="grid-4" :class="{ 'container-sm': !isLarge }">
            <div class="img"><img src="../assets/kys.png" alt=""></div>
            <div class="img-label"><h2 class="kys">Project 1</h2></div>
            <div class="img-label"><h2  class="mcdo">Project 2</h2></div>
            <div class="img"><img src="../assets/mcdo.png" alt=""></div>
            <div class="img"><img src="../assets/nvidia.png" alt=""></div>
            <div class="img-label"><h2  class="nvidia">Project 3</h2></div>
            <div></div>
            <div class="btn-more dribbble"><h3 class="more-designs"><a href="https://dribbble.com/elizear" target="_blank">View More &rarr;</a></h3></div>
            <!-- <div class="btn btn-more"><h2 class="more"><a href="https://dribbble.com/elizear" target="_blank">View More &rarr;</a></h2></div> -->
        </div>
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

