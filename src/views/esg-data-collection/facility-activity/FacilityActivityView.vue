<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Facility Data Collection Table</h2>
    </div>
    <div class="navbar-page">
      <FilterFormFacilityActivity />
    </div>
    <div class="page-content">
      <FacilityTable :tableData="listFacilityActivities" />
    </div>
    <div class="footer-page">
      <FormButtonTable />
    </div>
  </div>
</template>

<script>
import FacilityTable from "./components/FacilityTable.vue";
import FilterFormFacilityActivity from "./components/FilterFormFacilityActivity.vue";
import FormButtonTable from "../components/FormButtonTable.vue";
import { useUserStore } from "@/store/userStore";
import { getDataFacility, getFacilityAction } from "@/api";
export default {
  components: {
    FacilityTable,
    FilterFormFacilityActivity,
    FormButtonTable,
  },
  methods: {
    addNewRow() {
      this.listFacilityActivities.push({});
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
    const { data } = await getDataFacility(
      this.userStore.getUserInfo().company_id
    );
    const facilityIds = data.data?.map((item) => item.id);

    this.listFacilityActivities = await getFacilityAction(facilityIds).then(
      (res) =>
        res.data.data?.map((item) => ({
          date: item.date,
          facilityID: item.company_facility_master_data_id,
          fuelSource: item.fuel_source_id,
          activityType: item.activity_type_id,
          fuelAmount: item.fuel_amount,
          unit: item.Units,
        }))
    );
  },
  data() {
    return {
      listFacilityActivities: [],
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
