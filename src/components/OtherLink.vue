<template>
  <template v-if="link_url.match(/selection/g)">
    <a :title="link_title" :href="formsDaacSelection" :class="link_class">{{link_text}}<template v-if="link_icon"><img :src="getImgUrl(link_icon)" alt="Arrow Image" /></template></a>
  </template>
  <template v-else-if="link_url.match(/requests/g)">
    <a :title="link_title" :href="dashboardRequests" :class="link_class">{{link_text}}<template v-if="link_icon"><img :src="getImgUrl(link_icon)" alt="Arrow Image" /></template></a>
  </template>
  <template v-else>
    <a :title="link_title" :href="dashboardRoot" :class="link_class">{{link_text}}<template v-if="link_icon"><img :src="getImgUrl(link_icon)" alt="Arrow Image" /></template></a>
  </template>
</template>

<script>
export default {
  name: "OtherLink",
  props: ["link_title", "link_url", "link_text", "link_class", "link_icon"],
  computed: {
    dashboardRoot() {
      return process.env.VUE_APP_DASHBOARD_ROOT;
    },
    dashboardRequests() {
      return `${process.env.VUE_APP_DASHBOARD_ROOT}/requests`;
    },
    formsDaacSelection() {
      return `${process.env.VUE_APP_FORMS_ROOT}/daacs/selection`;
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic);
    }
  }
};
</script>