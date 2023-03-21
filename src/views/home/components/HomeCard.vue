<template>
  <div class="home-card">
    <router-link :to="cardLink">
      <h4>{{ cardName }}</h4>
    </router-link>

    <h1>{{ cardContent }}</h1>
    <span>{{ cardMemo }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cardName: {
      type: String,
      default: () => "",
    },
    cardContent: {
      type: String,
      default: () => "",
    },
    cardMemo: {
      type: String,
      default: () => "",
    },
    cardLink: {
      type: String,
      default: () => "",
    },
  },
});
</script>

<style scoped>
.home-card {
  height: 164px;
  width: 194px;
  margin-right: 13px;
  text-align: center;
  background-color: #FFFFFF;
}

a {
  text-decoration: none;
  color: black;
}
</style>
