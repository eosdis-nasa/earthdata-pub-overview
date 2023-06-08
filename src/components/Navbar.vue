<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-lg mx-0">
      <span class="navbar-brand nasa">Earthdata Pub</span>
      <div class="justify-content-end" id="navbarNav">
        <div class="navbar-nav"  id="navbarSupportedContent">
          <template v-if="this.$route.name == 'Home'">
            <router-link :to="{ name: 'Home' }" aria-label="Home page" class="nav-item nav-link active">Home</router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'Home' }" class="nav-item nav-link">Home</router-link>
          </template>
          <template v-if="this.$route.name == 'Getting Started'">
            <router-link :to="{ name: 'Getting Started' }" class="nav-item nav-link active">Getting Started</router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'Getting Started' }" class="nav-item nav-link">Getting Started</router-link>
          </template>
          <template v-if="this.$route.name == 'Data Publication Guidelines'">
            <router-link :to="{ name: 'Data Publication Guidelines' }" class="nav-item nav-link active">Data Publication Guidelines</router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'Data Publication Guidelines' }" class="nav-item nav-link">Data Publication Guidelines</router-link>
          </template>
          <OtherLink link_title="Dashboard" link_url="/dashboard" link_text="Dashboard" link_class="nav-item nav-link" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: ['navbar']
};
</script>
<style scoped>
  .nav-item.nav-link {
    text-underline-offset: 8px;
  }
</style>