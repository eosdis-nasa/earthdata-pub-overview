<template>
    <div id='getting-started-hero' class="card-grid">
        <div class="card">
            <div class="row pt-5">
                <p>Read NASA’s <router-link :to="{ name: 'Data Publication Guidelines' }" >Data Publication Guidelines</router-link>, then follow the steps outlined below.</p>
            </div>
        </div>
        <div class="card right-card">
            <div class="row pt-5">
                <p>If you have an Earthdata Pub account, click <OtherLink link_title="Dashboard" link_url="/dashboard" link_text="HERE" /> to begin using Earthdata Pub.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    components: {},
    name: "GettingStartedHero",
    data() {
        return {
            items: []
        }
    },
    mounted() { },
    methods: {}
};
</script>
<style scoped>

</style>
  