<template class='popper'>
  <Popper locked="true" :offsetSkid="pageOffset" :key="pageOffset">
    <span class="fa fa-info-circle"></span>
    <template #content>
      <div style="max-width: 240px;">
      <h1 v-if="heading"><hr>{{heading}}</h1>
      <p v-if="text">{{text}}</p>
      <template v-if="icon || link_url || link_title || link_text">
        <template v-if="icon && icon.indexOf('.') !==-1">
          <img :src="icon" alt="info bubble image" />
        </template>
        <template v-else-if="link_name">
          <i :class="icon"></i><OverviewLink :name="link_name" :link_title="link_title" :link_text="link_text" />
        </template>
        <template v-else>
          <span class="fas fa-external-link-alt"></span><a :href="link_url" :title="link_title" target="_blank">{{ link_text }}</a>
        </template>
      </template>
      </div>
    </template>
  </Popper>
</template>

<script>
export default {
  name: "InfoBubble",
  props: ["heading", "text", "icon", "link_url", "link_title", "link_text", "link_name"],
  data() {
    return{
      pageOffset: (window.innerWidth - 1450) / 2
    }
  },
  methods: {
    onResize() {
      this.pageOffset = (window.innerWidth - 1450) / 2
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
  }
};
</script>
<style>
  :root {
    --popper-theme-background-color: #ffffff;
    --popper-theme-background-color-hover: #ffffff;
    --popper-theme-border-width: 1px;
    --popper-theme-border-style: solid;
    --popper-theme-border-color: #eeeeee;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
    --popper-theme-box-shadow: 0px 3px 3px #0000001F;
    --popper-theme-font: normal normal normal 14px/25px Open Sans;
    --popper-theme-letter-spacing: 0px;
    --popper-theme-text-color: #000000;
  }
</style>