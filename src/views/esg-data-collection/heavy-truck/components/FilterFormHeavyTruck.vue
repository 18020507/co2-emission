<template>
  <div class="filter-form">
    <input type="text" placeholder="What are you looking for?" />
    <div class="list-button-filter">
      <SelectFuelSource />
      <SelectBranch />
      <SelectClient />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {SelectClient, SelectFuelSource, SelectBranch} from "@/views/components/select"
export default defineComponent({
  components: {
    SelectClient,
    SelectFuelSource,
    SelectBranch
  },
});
</script>

<style scoped>
.filter-form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 100px;
}

input {
  width: 370px;
  padding: 10px 45px;
  background: white url("@/assets/search-icon.svg") no-repeat 15px center;
  background-size: 20px 20px;
  border-radius: 45px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

::placeholder {
  color: black;
  font-size: 14px;
  font-weight: 700;
}

</style>
