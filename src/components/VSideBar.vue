<template>
  <div :style="nodeMargin">
    <div class="menu-link">
      <router-link
        :to="node.link"
        @click="toggleChildren"
        @keypress="toggleChildren"
      >
        <span>
          <font-awesome-icon :icon="toggleChildrenIcon" />
        </span>

        {{ node.label }}
      </router-link>
    </div>
    <div v-if="hasChildren" v-show="showChildren">
      <VSideBar
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :spacing="spacing + 10"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    node: {
      type: Object,
      required: true,
    },
    spacing: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      showChildren: false,
    };
  },
  computed: {
    nodeMargin() {
      return {
        "margin-left": `${this.spacing}px`,
      };
    },
    hasChildren() {
      const { children } = this.node;
      return children && children.length > 0;
    },
    toggleChildrenIcon() {
      return this.showChildren ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right";
    },
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.menu-link {
  padding: 8px 0px;
}

span {
  margin-left: 30px;
  margin-right: 5px;
}
</style>