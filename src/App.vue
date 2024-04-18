<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <navbar />
  <router-view />
  <FooterBottom />
  <BackToTop />
</template>
<script>
import Navbar from './components/Navbar.vue';
import FooterBottom from './components/FooterBottom.vue';
import BackToTop from './components/BackToTop.vue';

export default {
  components: {
    Navbar,
    FooterBottom,
    BackToTop
  }
};
</script>
