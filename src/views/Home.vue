<template>
  <div class="home">
      <div class="name" :style="{ backgroundImage: `url(${image})` }">
            <div class="text-holder">
                <h1>elizear john galapia.</h1>
                <h1 class="animated-text"> web developer <span>></span></h1>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/bg-intro.svg'),
            publicPath: process.env.BASE_URL,
            styleObject: {
                backgroundImage: `url($(this.image))`
            }
        }
    }
}
</script>

<style>

</style>