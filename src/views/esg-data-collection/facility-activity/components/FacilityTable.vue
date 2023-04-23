<template>
  <table>
    <tr class="table-head">
      <th>Date</th>
      <th>Facility ID</th>
      <th>Fuel Source</th>
      <th>Activity Type</th>
      <th>Fuel Amount</th>
      <th>Units</th>
    </tr>
    <tr v-for="(item, index) in tableData" :key="item.id">
      <template v-if="item.isEditable">
        <td>
          <input
            :value="item.date"
            @change="(event) => handleUpdateInput(index, 'date', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.facilityID"
            @change="(event) => handleUpdateInput(index, 'facilityID', event.target.value)"
          />
        </td>
        <td>
          <select
            :value="item.fuelSource"
            @change="(event) => handleUpdateInput(index, 'fuelSource', event.target.value)"
          >
          <option v-for="option in fuelSourceOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </td>
        <td>
          <select
            :value="item.activityType"
            @change="(event) => handleUpdateInput(index, 'activityType', event.target.value)"
          >
          <option v-for="option in activityTypeoptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </td>
        <td>
          <input
            :value="item.fuelAmount"
            @change="(event) => handleUpdateInput(index, 'fuelAmount', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.Units"
            @change="(event) => handleUpdateInput(index, 'Units', event.target.value)"
          />
        </td>
      </template>
      <template v-else>
        <td>{{ item.date }}</td>
        <td>{{ item.facilityID }}</td>
        <td>{{ item.fuelSource }}</td>
        <td>{{ item.activityType }}</td>
        <td>{{ item.fuelAmount }}</td>
        <td>{{ item.Units }}</td>
      </template>
    </tr>
  </table>
</template>

<script>
import { getActivityType, getFuelSource } from '@/api';
import { useUserStore } from '@/store/userStore';
export default {
  name: "FacilityTable",
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  async created() {
    if (!this.userStore.getUserInfo()) {
      this.$router.go("/home");
    }

    const responseFuelSource = await getFuelSource(
      this.userStore.getUserInfo().company_id
    );
    this.fuelSourceOptions = responseFuelSource.data.data?.map((item) => ({
      label: item.fuel_source_name,
      value: item.id,
    }));

    const responseActityType = await getActivityType(
      this.userStore.getUserInfo().company_id
    );
    this.activityTypeoptions = responseActityType.data.data?.map((item) => ({
      label: item.activity_type_name,
      value: item.id,
    }));
  },
  data() {
    return {
      fuelSourceOptions: [],
      activityTypeoptions: []
    };
  },
  props: {
    tableData: Array,
    value: {
      type: String
    }
  },
  methods: {
    handleUpdateInput(index, type, value) {
      this.$emit('handleUpdateTableFacilityActivityData', {index, type, value})
    }
  }
};
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

select {
  width: 120px;
}

table {
  width: 100%;
  table-layout: fixed;
}
.table-head {
  background-color: #b1b1b1;
}
</style>
