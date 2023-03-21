<template>
  <div class="menu-title">ESG DATA COLLECTION</div>
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
          label: "Master Data",
          link: "",
          children: [
            {
              id: 2,
              label: "Customer",
              link: "",
              children: [],
            },
            {
              id: 3,
              label: "Company",
              link: "/esgDataCollection/company",
              children: [],
            },
          ],
        },
        {
          id: 4,
          label: "Transaction Data",
          link: "",
          children: [
            {
              id: 5,
              label: "Transportation",
              link: "",
              children: [
                {
                  id: 6,
                  label: "Heavy Trucks",
                  link: "/esgDataCollection/heavy-truck",
                },
              ],
            },
            {
              id: 7,
              label: "Facility",
              link: "/esgDataCollection/facility",
              children: [],
            },
            {
              id: 8,
              label: "Utility",
              link: "",
              children: [
                {
                  id: 9,
                  label: "Electricity",
                  link: "/esgDataCollection/electricity",
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
