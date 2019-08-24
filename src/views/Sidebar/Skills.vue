<template>

    <div>
        <div class="heading uiux" v-if="!isLarge">
            <h1 class="bold uiux">Skills</h1>
        </div>
        <ul class="skills pl-sm" :class="{ 'container-sm': !isLarge }">
            <li class="medium"><svg class="html"> <rect fill="#799AE9"/></svg>HTML / CSS</li>
            <li class="medium"><svg class="js"> <rect fill="#FF9C2C"/></svg>Javascript</li>
            <li class="medium"><svg class="jquery"> <rect fill="#FFF953"/></svg>jQuery</li>
            <li class="medium"><svg class="vue"> <rect fill="#45FE9B"/></svg>Vue.js</li>
            <li class="medium"><svg class="laravel"> <rect fill="#F05340"/></svg>Laravel</li>
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