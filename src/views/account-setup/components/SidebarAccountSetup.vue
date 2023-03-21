<template>
  <div class="menu-title">ACCOUNT & SETTINGS</div>
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
          label: "Company Information",
          link: "",
          children: [],
        },
        {
          id: 5,
          label: "Billing & Subscription",
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
