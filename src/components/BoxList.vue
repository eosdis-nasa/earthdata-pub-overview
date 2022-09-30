<template v-for="(item, index) in list" :key="index">
    <div class="card-grid">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" v-if="list.heading !== undefined">{{list.heading}}</h5>
                <!--<h6 class="card-subtitle mb-2 text-muted" v-if="list.subtitle !== undefined">{{list.subtitle}}</h6>-->
                <p class="card-text" v-if="list.text !== undefined">{{list.text}}</p>
                <!--<template v-for="(link_item, list_index) in list.links" :key="list_index">
                    <a href="#" class="card-link">{{link_item}}</a>
                </template>-->
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "BoxList",
  props: ['list'],
  mounted() {
    window.boxListComponent = this;
    console.log('box_list mounted')
  }
}
</script>