<template>
    <div class="resume center mt-md">
        <div class="heading resume" v-if="!isLarge">
            <h1 class="bold resume">Resume</h1>
        </div>
        <div class="about" :class="{ 'container-sm': !isLarge }">
            <h4>About Me</h4>
            <div class="description padding-sides">
                <p class="regular">Young and highly driven to learn & grow as an indivual and as a developer.</p>
                <ul class="skills">
                    <li><svg><rect fill="#799AE9"/></svg>Elizear John Galapia</li>
                    <li><svg><rect fill="#FF9C2C"/></svg>Paoay, Ilocos Norte, Philippines</li>
                    <li><svg><rect fill="#FFF953"/></svg>elizeargalapia.main@gmail.com</li>
                </ul>
            </div>
            <div class="btn-more">
                <h3 class="more-designs">
                    <a href="#" target="_blank">Download Resume</a>
                </h3>
            </div>
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
