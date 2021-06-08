// App.vue

<template>
  <div id="app">
    <Overview />
  </div>
</template>

<script>
import Overview from './components/Overview.vue'

export default {
  name: 'app',
  components: {
    Overview
  }
}
</script>

<style>
@import "https://cdn.earthdata.nasa.gov/eui/1.1.8/stylesheets/application.css";
</style>