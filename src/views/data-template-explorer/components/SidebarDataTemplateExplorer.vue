<template>
  <div class="menu-title">DATA TEMPLATE EXPLORER</div>
  <div class="menu-content">
    <VSideBar v-for="node in nodes" :key="node.id" :node="node" />
  </div>
</template>

<script>
import VSideBar from "@/components/VSideBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { VSideBar },
  computed: {
    nodes() {
      return [
        {
          id: 1,
          label: "Facility",
          link: "/data-template-explorer/facility",
          children: [],
        },
        {
          id: 2,
          label: "Transportation",
          link: "/data-template-explorer/transportation",
          children: [],
        },
        {
          id: 3,
          label: "Employee",
          link: "",
          children: [],
        },
        {
          id: 4,
          label: "Energy",
          link: "",
          children: [],
        },
        {
          id: 5,
          label: "Waste",
          link: "",
          children: [],
        },
        {
          id: 6,
          label: "Water",
          link: "",
          children: [],
        },
        {
          id: 7,
          label: "Land",
          link: "",
          children: [],
        },
      ];
    },
  },
});
</script>

<style scoped>
.menu-title {
  padding: 0px;
  margin-top: 39px;
  margin-left: 32px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
