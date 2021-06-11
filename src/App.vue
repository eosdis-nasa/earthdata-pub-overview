// App.vue

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-lg">
          <a class="navbar-brand nasa">Earthdata Pub Overview</a>
      </div>
  </nav>
  <div id="app">
    <Daacs />
  </div>
</template>

<script>
import Daacs from './components/Daacs.vue'

export default {
  name: 'app',
  components: {
    Daacs
  }
}
</script>
