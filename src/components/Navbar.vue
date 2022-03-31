<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-lg">
        <router-link class="navbar-brand nasa" to="/">Earthdata Pub Overview<span class="badge btn-success text-white badge-beta">Beta</span></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav"  id="navbarSupportedContent">
            <a class="nav-item nav-link" :href=dashboardRoot>Dashboard</a>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: ['navbar'],
  computed: {
    dashboardRoot () {
      return process.env.VUE_APP_DASHBOARD_ROOT
    }
  }
};
</script>