<template>
  <navbar />
  <router-view/>
  <Footer />
  <BackToTop/>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
export default {
  components: { 
    Navbar,
    Footer,
    BackToTop
  },
  mounted() {
  },
  methods: {
    getImgUrl(pic) {
      return require('./assets/'+pic);
    }
  }
};
</script>