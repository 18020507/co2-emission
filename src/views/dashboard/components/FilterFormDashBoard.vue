<template>
  <div class="filter-form">
    <SelectClient />
    <SelectVendor />
    <SelectFacility />
    <SelectVehicle />
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
import {
  SelectClient,
  SelectVendor,
  SelectFacility,
  SelectVehicle,
} from "@/views/components/select";
export default defineComponent({
  components: {
    SelectClient,
    SelectVendor,
    SelectFacility,
    SelectVehicle,
  },
});
</script>
  
<style scoped>
.filter-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
}
</style>
  