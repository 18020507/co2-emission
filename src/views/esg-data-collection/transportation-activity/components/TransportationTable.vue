<template>
  <table>
    <tr class="table-head">
      <th>Date</th>
      <th>Vehicle ID</th>
      <th>Client Name</th>
      <th>Fuel Source</th>
      <th>Fuel Amount</th>
      <th>Distance Travel</th>
    </tr>
    <tr v-for="(item, index) in tableData" :key="item.id">
      <template v-if="item.isEditable">
        <td>
          <input
            :value="item.date"
            @change=" (event) => handleUpdateInput(index, 'date', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.transportationMasterDataId"
            @change="(event) => handleUpdateInput(index, 'transportationMasterDataId', event.target.value)"
          />
        </td>
        <td>
          <select
            :value="item.clientName" @change="(event) => handleUpdateInput(index, 'clientName', event.target.value)"
          >
            <option v-for="option in clientOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </td>
        <td>
          <select
            :value="item.fuelSource" @change="(event) => handleUpdateInput(index, 'fuelSource', event.target.value)"
          >
            <option v-for="option in fuelSourceOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </td>
        <td>
          <input
            :value="item.fuelAmount"
            @change="
              (event) => handleUpdateInput(index, 'fuelAmount', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.distanceTravel"
            @change="(event) => handleUpdateInput(index, 'distanceTravel', event.target.value)"
          />
        </td>
      </template>
      <template v-else>
        <td>{{ item.date }}</td>
        <td>{{ item.transportationMasterDataId }}</td>
        <td>{{ item.clientName }}</td>
        <td>{{ item.fuelSource }}</td>
        <td>{{ item.fuelAmount }}</td>
        <td>{{ item.distanceTravel }}</td>
      </template>
    </tr>
  </table>
</template>

<script>
import { useUserStore } from "@/store/userStore";
import { getClient, getFuelSource } from "@/api";
export default {
  name: "TransTable",
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

    const responseClient = await getClient(
      this.userStore.getUserInfo().company_id
    );
    this.clientOptions = responseClient.data.data?.map((item) => ({
      label: item.client_name,
      value: item.id,
    }));
  },
  data() {
    return {
      fuelSourceOptions: [],
      clientOptions: [],
    };
  },
  props: {
    tableData: Array,
    value: {
      type: String,
    },
  },
  methods: {
    handleUpdateInput(index, type, value) {
      this.$emit("handleUpdateTableTransActivityData", { index, type, value });
    },
  },
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
