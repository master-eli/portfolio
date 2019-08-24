<template>
    <nav class="navigation">
    <div class="nav">
        <router-link :to="{ name: 'experience' }" active-class="active" exact class="mNav nav-experience">
            <h1 class="bold exp">experience</h1><span></span>
        </router-link>
    </div>
    <div class="nav">
        <router-link :to="{ name: 'uiux' }" active-class="active" class="mNav nav-uiux">
            <h1 class="bold uiux">ui / ux design</h1><span></span>
        </router-link>
    </div>
    <div class="nav">
        <router-link :to="{ name: 'resume' }" active-class="active" class="mNav nav-resume">
            <h1 class="bold resume">resume</h1><span></span>
        </router-link>
    </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>