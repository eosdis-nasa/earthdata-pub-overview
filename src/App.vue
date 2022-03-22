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
            <a class="nav-item nav-link" href="https://app.smartsheet.com/b/form/4978cb9677ad4198a96afd40102e9f2d" target="_blank">Feedback <i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    </nav>
  <router-view />
</template>
<style>
  .badge {
    margin-left: 15px;
  }
  .btn-success, .bs-green, .bs-success {
    background-color:#158749!important;
    border-color: #158749!important;
  }
  .navbar-dark .navbar-nav .nav-link {
    color:white!important;
  }
  h1 {
    font-size: 2rem!important;
  }
</style>