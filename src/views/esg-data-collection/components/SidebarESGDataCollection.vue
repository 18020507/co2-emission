<template>
  <div class="menu-title">DATA COLLECTION TABLE</div>
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
              label: "Facility",
              link: "/esgDataCollection/facility-master",
              children: [],
            },
            {
              id: 3,
              label: "Transportation",
              link: "/esgDataCollection/transport-master",
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
              label: "Facility",
              link: "/esgDataCollection/facility-activity",
              children: [],
            },
            {
              id: 7,
              label: "Transportation",
              link: "/esgDataCollection/transport-activity",
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
  margin-top: 39px;
  margin-left: 32px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
