<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Facility Data Collection Table</h2>
    </div>
    <div class="navbar-page">
      <FilterFormFacilityActivity @submit="handleFetch" />
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
import { getFacilityAction } from "@/api";
export default {
  components: {
    FacilityTable,
    FilterFormFacilityActivity,
    FormButtonTable,
  },
  emits: ["submit", "change"],
  data() {
    return {
      listFacilityActivities: [],
    };
  },
  methods: {
    addNewRow() {
      this.listFacilityActivities.push({});
    },
    handleChange() {
      this.$emit("submit", this.form);
      // this.$emit("change", this.form);
    },
    async handleFetch(formData) {
      if (!this.userStore.getUserInfo()) {
        this.$router.go("/home");
      }

      const response = await getFacilityAction(this.userStore.getUserInfo().company_id, formData);
      this.listFacilityActivities = response.data.data?.map((item) => ({
        date: item.date,
        facilityID: item.company_facility_master_data_id,
        fuelSource: item.fuel_source_name,
        activityType: item.activity_type_name,
        fuelAmount: item.fuel_amount,
        unit: item.Units,
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

    const response = await getFacilityAction(
      this.userStore.getUserInfo().company_id
    );
    this.listFacilityActivities = response.data.data?.map((item) => ({
      date: item.date,
      facilityID: item.company_facility_master_data_id,
      fuelSource: item.fuel_source_name,
      activityType: item.activity_type_name,
      fuelAmount: item.fuel_amount,
      unit: item.Units,
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
