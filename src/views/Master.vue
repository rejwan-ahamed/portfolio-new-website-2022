<template>
<headerm></headerm>
<router-view></router-view>
<footerm></footerm>
</template>

<script>
import headerm from "../components/Header.vue";
import footerm from "../components/Footer.vue";
export default {
    name: 'MasterPart',
    components: {
        headerm,
        footerm
    }
}
</script>

<style>
</style>