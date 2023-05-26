<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-lg mx-0">
      <router-link class="navbar-brand nasa" to="/">Earthdata Pub<template v-if="this.$route.name=='Home'"> </template></router-link>
      <div class="justify-content-end" id="navbarNav">
        <div class="navbar-nav"  id="navbarSupportedContent">
          <router-link :to="{ name: 'Home' }" class="nav-item nav-link active">Home</router-link>
          <router-link :to="{ name: 'Getting Started' }" class="nav-item nav-link">Getting Started</router-link>
          <router-link :to="{ name: 'Data Publication Guidelines' }" class="nav-item nav-link">Data Publication Guidelines</router-link>
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