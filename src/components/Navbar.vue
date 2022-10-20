<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-lg mx-0">
      <router-link class="navbar-brand nasa" to="/">Earthdata Pub<template v-if="this.$route.name=='Home'"> Overview</template><span class="badge badge-white">Beta</span></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav"  id="navbarSupportedContent" v-if="this.$route.name=='Home'">
          <OtherLink link_title="Dashboard" link_url="/dashboard" link_text="Dashboard" link_class="btn btn-lg btn-dark-blue text-white" />
        </div>
        <div class="navbar-nav"  id="navbarSupportedContent" v-else>
          <template v-if="this.$route.name=='Home'">
            <router-link :to="{ name: 'Home' }" class="nav-item nav-link active">Overview</router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'Home' }" class="nav-item nav-link">Overview</router-link>
            <router-link :to="{ name: 'Data Producer Resources' }" class="nav-item nav-link active">Data Producer Resources</router-link>
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
