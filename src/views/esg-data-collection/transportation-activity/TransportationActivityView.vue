<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Trucks Data Collection Table</h2>
    </div>
    <div class="navbar-page">
      <FilterFormTransportationActivity />
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
import { getDataTransport, getTransAction } from "@/api";
export default {
  components: {
    FilterFormTransportationActivity,
    FormButtonTable,
    TransportationTable,
  },
  methods: {
    addNewRow() {
      this.listFacility.push({});
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
    const { data } = await getDataTransport(
      this.userStore.getUserInfo().company_id
    );
    const transId = data.data?.map((item) => item.id);

    this.listTrans = await getTransAction(transId).then((res) =>
      res.data.data?.map((item) => ({
        date: item.date,
        vehicleID: item.transportation_master_data_id,
        clientName: item.client_id,
        fuelSource: item.fuel_source_id,
        fuelAmount: item.fuel_amount,
        distanceTravel: item.distance_travel,
      }))
    );
  },
  data() {
    return {
      listTrans: [],
    };
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
