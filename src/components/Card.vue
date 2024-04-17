<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <h5 class="card-title" v-if="list.heading">{{ list.heading }}
    <hr>
  </h5>
  <h6 class="card-subtitle mb-2 text-muted" v-if="list.subtitle">{{ list.subtitle }}</h6>
  <p class="card-text" v-if="list.text && list.text.indexOf('<') !== -1">
    <Rerender :html="list.text" />
  </p>
  <p v-else-if="list.text">{{ list.text }}</p>
</template>
<script>
import Rerender from './Rerender.vue';

export default {
  components: {
    Rerender
  },
  name: 'Card',
  props: ['list']
};
</script>
