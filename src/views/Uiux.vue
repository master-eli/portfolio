<template>
    <div>
        <div class="heading uiux" v-if="!isLarge">
            <h1 class="bold uiux">UI / UX Design</h1>
        </div>
        <div class="grid-4" :class="{ 'container-sm': !isLarge }">
            <div class="img"><img src="../assets/kys.png" alt=""></div>
            <div class="img-label"><h2 class="kys"><a href="https://dribbble.com/shots/6738186-Kyrie-Irving-Brooklyn-Bound">Project 1</a></h2></div>
            <div class="img-label"><h2  class="mcdo"><a href="https://dribbble.com/shots/6795699-Mcdo-Redesign">Project 2</a></h2></div>
            <div class="img"><img src="../assets/mcdo.png" alt=""></div>
            <div class="img"><img src="../assets/nvidia.png" alt=""></div>
            <div class="img-label"><h2  class="nvidia"><a href="https://dribbble.com/shots/6741487-Nvidia-Gaming">Project 3</a></h2></div>
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

