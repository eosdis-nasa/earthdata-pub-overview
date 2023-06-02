<template>
    <div id='getting-started-hero' class="card-grid">
        <div class="card">
            <div class="row pt-5">
                <div class="heading"><b>Are you NEW to NASA Earth Science Data Publication?</b></div>
                <p>Please read NASA’s <router-link :to="{ name: 'Data Publication Guidelines' }" >Data Publication Guidelines</router-link> before you get started, and then follow the guidance below.</p>
            </div>
        </div>
        <div class="card right-card">
            <div class="row pt-5">
                <div class="heading"><b>RETURNING USERS</b></div>
                <p>If you are already familiar with NASA’s Earth science <router-link :to="{ name: 'Data Publication Guidelines' }" >Data Publication Guidelines</router-link> and have an Earthdata Pub account, click <OtherLink link_title="Dashboard" link_url="/dashboard" link_text="HERE" /> to begin using Earthdata Pub.</p>
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
.heading {
    text-align: center;
    position:relative;
    top:-15px;
}
p {
    text-align: start;
    padding-left:15px;
    padding-right:15px;
}
.card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #074872;
    border-radius: 8px;
    opacity: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
}
.right-card {
    background-color:#c8e3f4;
}
#getting-started-hero {
    margin-bottom: 1rem!important;
}
</style>
  