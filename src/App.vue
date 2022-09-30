<template>
  <navbar />
  <router-view/>
  <Content />
  <Footer />
</template>
<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';
export default {
  components: { 
    Navbar,
    Content, 
    Footer
  },
  mounted() {
    console.log('app mounted')
  }
};
</script>