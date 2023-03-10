<template>
  <h3 class="menu-title">ACCOUNT & SETTINGS</h3>
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
          children: [
            {
              id: 2,
              label: "General Information",
              link: "",
              children: [],
            },
            {
              id: 3,
              label: "Industry & Services",
              link: "/account-setup",
              children: [],
            },
          ],
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
  margin: 30px;
}
</style>