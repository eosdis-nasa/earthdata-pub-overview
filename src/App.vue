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
            <a class="nav-item nav-link" href="https://app.smartsheet.com/b/form/4978cb9677ad4198a96afd40102e9f2d" target="_blank">Feedback</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
              </svg>
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