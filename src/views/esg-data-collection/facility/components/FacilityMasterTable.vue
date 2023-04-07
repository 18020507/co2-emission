<template>
  <table>
    <tr class="table-head">
      <th>Facility ID</th>
      <th>Facility Type</th>
      <th>Facility Address</th>
      <th>Employees Number</th>
      <th>Forklift Number</th>
    </tr>
    <tr v-for="(item, index) in tableData" :key="item.id">
      <template v-if="item.isEditable">
        <td>
          <input
            :value="item.facilityID"
            @change="(event) => handleUpdateInput(index, 'facilityID', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.facilityType"
            @change="(event) => handleUpdateInput(index, 'facilityType', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.facilityAddress"
            @change="(event) => handleUpdateInput(index, 'facilityAddress', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.employeeNum"
            @change="(event) => handleUpdateInput(index, 'employeeNum', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.forkliftNum"
            @change="(event) => handleUpdateInput(index, 'forkliftNum', event.target.value)"
          />
        </td>
      </template>
      <template v-else>
        <td>{{ item.facilityID }}</td>
        <td>{{ item.facilityType }}</td>
        <td>{{ item.facilityAddress }}</td>
        <td>{{ item.employeeNum }}</td>
        <td>{{ item.forkliftNum }}</td>
      </template>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableData: Array,
  },
  methods: {
    handleUpdateInput(index, type, value) {
      this.$emit('handleUpdateTableFacilityData', {index, type, value})
    }
  }
});
</script>

<style scoped>
table,
th,
td {
  border: 2px solid #b1b1b1;
  border-collapse: collapse;
}

tr {
  height: 38px;
  text-align: center;
  font-weight: bold;
}

input {
  width: 120px;
}

table {
  width: 80%;
}
.table-head {
  background-color: #b1b1b1;
}
</style>
