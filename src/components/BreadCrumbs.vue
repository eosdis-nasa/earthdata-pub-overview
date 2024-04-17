<template>
  <div class="breadcrumbs" v-if="this.$route.name !== 'Home'">
    <router-link :to="{ name: 'Home' }" class="nav-item">Overview Home</router-link>
    <template v-if="this.$route.name !== 'Data Producer Resources'">
      <div class="separator">|</div>
      <router-link :to="{ name: 'Data Producer Resources' }" class="nav-item">Data
        Producer Resources</router-link>
    </template>
    <template v-else>
      <div class="separator">|</div>Data Producer Resources
    </template>
    <template v-if="this.$route.name == 'Data Publication'">
      <div class="separator">|</div>What is Data Publication
    </template>
    <template v-else-if="this.$route.name == 'What is a NASA DAAC'">
      <div class="separator">|</div>What is a NASA DAAC
    </template>
    <template v-else-if="this.$route.name == 'How To Use Earthdata Pub'">
      <div class="separator">|</div>How To Use Earthdata Pub
    </template>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: ['breadcrumbs']
};
</script>
<style scoped>
.breadcrumbs .nav-item {
  text-decoration: underline;
}

.breadcrumbs {
  display: inline-block;
  font-size: smaller;
  padding-top: 12px;
  margin-left: 3rem;
}

.separator {
  display: inline-block;
  color: #CCC;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
