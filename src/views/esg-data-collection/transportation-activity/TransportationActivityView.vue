<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Trucks Data Collection Table</h2>
    </div>
    <div class="navbar-page">
      <FilterFormTransportationActivity @submit="handleFetch" />
    </div>
    <div class="page-content">
      <TransportationTable :tableData="listTrans" />
    </div>
    <div class="footer-page">
      <FormButtonTable />
    </div>
  </div>
</template>

<script>
import TransportationTable from "./components/TransportationTable.vue";
import FormButtonTable from "../components/FormButtonTable.vue";
import FilterFormTransportationActivity from "./components/FilterFormTransportationActivity.vue";
import { useUserStore } from "@/store/userStore";
import { getTransAction } from "@/api";
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
      this.listFacility.push({});
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
        vehicleID: item.transportation_master_data_id,
        clientName: item.client_name,
        fuelSource: item.fuel_source_name,
        fuelAmount: item.fuel_amount,
        distanceTravel: item.distance_travel,
      }));
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
      vehicleID: item.transportation_master_data_id,
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
