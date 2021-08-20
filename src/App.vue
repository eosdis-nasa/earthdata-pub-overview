<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-lg">
        <router-link class="navbar-brand nasa" to="/">Earthdata Pub Overview<span class="badge btn-success text-white">Beta</span></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav"  id="navbarSupportedContent">
            <router-link class="nav-item nav-link" to="/beta">Content</router-link>
            <a class="nav-item nav-link" href="/dashboard">Dashboard</a>
            <router-link class="nav-item nav-link" to="/instructions">How to Test</router-link>
            <router-link class="nav-item nav-link" to="/feedback">Feedback</router-link>
          </div>
        </div>
      </div>
    </nav>
  <router-view />
</template>
<style scoped>
.badge {
  margin-left: 15px;
}
</style>