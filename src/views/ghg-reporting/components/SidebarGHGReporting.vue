<template>
  <div class="menu-title">GHG REPORTING</div>
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
          label: "Summary Result",
          link: "/ghgReporting/summary-result",
          children: [],
        },
        {
          id: 2,
          label: "Detailed Result",
          link: "",
          children: [
            {
              id: 3,
              label: "Scope 1",
              link: "",
              children: [
                {
                  id: 4,
                  label: "Stationary Combusion",
                  link: "/ghgReporting/stationary-combustion",
                  children: [],
                },
                {
                  id: 5,
                  label: "Mobile Combusion",
                  link: "/ghgReporting/mobile-combustion",
                  children: [],
                },
                {
                  id: 6,
                  label: "Refrigerants",
                  link: "",
                  children: [],
                },
              ],
            },
            {
              id: 7,
              label: "Scope 2",
              link: "",
              children: [
              {
                  id: 8,
                  label: "Purchased Electricity",
                  link: "",
                  children: [],
                },
              ],
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
  margin-top: 39px;
  margin-left: 32px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
