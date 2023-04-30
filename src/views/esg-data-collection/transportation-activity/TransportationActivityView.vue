<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Trucks Data Collection Table</h2>
    </div>
    <div class="navbar-page">
      <FilterFormTransportationActivity @submit="handleFetch" />
    </div>
    <div class="page-content">
      <TransportationTable
        :tableData="listTrans"
        @handleUpdateTableTransActivityData="handleUpdateTableTransActivityData"
      />
    </div>
    <div class="footer-page">
      <FormButtonTable
        :addNewRow="() => addNewRow()"
        :commitData="() => commitData()"
      />
    </div>
  </div>
</template>

<script>
import TransportationTable from "./components/TransportationTable.vue";
import FormButtonTable from "../components/FormButtonTable.vue";
import FilterFormTransportationActivity from "./components/FilterFormTransportationActivity.vue";
import { useUserStore } from "@/store/userStore";
import { createTransAction, getTransAction } from "@/api";
export default {
  components: {
    FilterFormTransportationActivity,
    FormButtonTable,
    TransportationTable,
  },
  emits: ["submit", "change"],
  data() {
    return {
      listTrans: [],
    };
  },
  methods: {
    addNewRow() {
      this.listTrans.push({
        date: "",
        transportationMasterDataId: "",
        clientName: "",
        fuelSource: "",
        fuelAmount: "",
        distanceTravel: "",
        isEditable: true,
      });
    },
    handleUpdateTableTransActivityData({ index, type, value }) {
      this.listTrans[index][type] = value;
    },
    handleChange() {
      this.$emit("submit", this.form);
      // this.$emit("change", this.form);
    },
    async handleFetch(formData) {
      if (!this.userStore.getUserInfo()) {
        this.$router.go("/home");
      }

      const response = await getTransAction(
        this.userStore.getUserInfo().company_id,
        formData
      );
      this.listTrans = response.data.data?.map((item) => ({
        date: item.date,
        transportationMasterDataId: item.transportation_master_data_id,
        clientName: item.client_name,
        fuelSource: item.fuel_source_name,
        fuelAmount: item.fuel_amount,
        distanceTravel: item.distance_travel,
      }));
    },
    async commitData() {
      const response = await createTransAction(
        this.listTrans.map((item) => ({
          transportation_master_data_id: parseInt(item.transportationMasterDataId),
          date: item.date,
          fuel_source_id: item.fuelSource,
          client_id: item.clientName,
          fuel_amount: parseFloat(item.fuelAmount),
          distance_travel: parseInt(item.distanceTravel),
        }))
      );
      if (response.status === 200) {
        console.log("Success");
        this.handleFetch();
      }
    },
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  async created() {
    if (!this.userStore.getUserInfo()) {
      this.$router.go("/home");
    }

    const response = await getTransAction(
      this.userStore.getUserInfo().company_id
    );
    this.listTrans = response.data.data?.map((item) => ({
      date: item.date,
      transportationMasterDataId: item.transportation_master_data_id,
      clientName: item.client_name,
      fuelSource: item.fuel_source_name,
      fuelAmount: item.fuel_amount,
      distanceTravel: item.distance_travel,
    }));
  },
};
</script>

<style scoped>
.head-page-content {
  color: green;
}

.page-content {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
