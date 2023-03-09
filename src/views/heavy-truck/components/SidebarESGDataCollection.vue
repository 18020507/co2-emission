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
          label: "Base Data Input",
          link: "/base-data-input",
          children: [],
        },
        {
          id: 2,
          label: "Transaction Data Input",
          link: "",
          children: [
            {
              id: 3,
              label: "Transportation",
              link: "",
              children: [
                {
                  id: 4,
                  label: "Heavy Trucks",
                  link: "/heavy-truck",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          label: "Facility",
          link: "/facility",
          children: [],
        },
        {
          id: 6,
          label: "Utility",
          link: "",
          children: [
            {
              id: 7,
              label: "Electricity",
              link: "/electricity",
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