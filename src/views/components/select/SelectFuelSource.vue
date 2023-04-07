<template>
  <VSelect
    :options="options"
    placeholder="Fuel Source"
    @change="handleChange"
    :value="value"
  />
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
import { useUserStore } from "@/store/userStore";
import { getFuelSource } from "@/api";
export default defineComponent({
  components: { VSelect },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  async created() {
    if (!this.userStore.getUserInfo()) {
      this.$router.go("/home");
    }

    const response = await getFuelSource(
      this.userStore.getUserInfo().company_id
    );
    this.options = response.data.data?.map((item) => ({
      label: item.fuel_source_name,
      value: item.fuel_source_name,
    }));
  },
  data() {
    return {
      options: [],
    };
  },
  props: {
    value: {
      type: String
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('update:value', value)
      this.$emit('change', value)
    }
  },
  emits: ["update:value", "change"]
});
</script>
