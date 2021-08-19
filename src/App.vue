<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-lg">
      <router-link class="navbar-brand nasa" to="/">Earthdata Pub Overview</router-link>
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/daacs">DAACs</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/policy">Policy</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>
