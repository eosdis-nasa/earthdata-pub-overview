<template>
  <router-link :to="{ name: name }" :title="link_title">{{link_text}}</router-link>
</template>

<script>
export default {
  name: "OverviewLink",
  props: ["name", "link_title", "link_text"]
};
</script>