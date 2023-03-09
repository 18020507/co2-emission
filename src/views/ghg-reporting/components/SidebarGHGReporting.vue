<template>
  <h3 class="menu-title">CORE MODULES</h3>
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
          label: "Scope 1",
          link: "",
          children: [
            {
              id: 2,
              label: "Stationary Combustion",
              link: "",
              children: [],
            },
            {
              id: 3,
              label: "Mobile Combustion",
              link: "/mobile-combustion",
              children: [],
            },
            {
              id: 4,
              label: "Refrigerants",
              link: "",
              children: [],
            },
          ],
        },
        {
          id: 5,
          label: "Scope 2",
          link: "",
          children: [
            {
              id: 6,
              label: "Purchased Electricity",
              link: "",
              children: [],
            },
          ],
        },
        {
          id: 6,
          label: "Scope 3",
          link: "",
          children: [
            {
              id: 7,
              label: "Transportation",
              link: "",
              children: [],
            },
          ],
        },
      ];
    },
  },
});
</script>
  
  <style scoped>
.menu-title {
  padding: 0px;
  margin: 30px;
}
</style>