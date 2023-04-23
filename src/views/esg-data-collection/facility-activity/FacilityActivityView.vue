<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Facility Data Collection Table</h2>
    </div>
    <div class="navbar-page">
      <FilterFormFacilityActivity @submit="handleFetch" />
    </div>
    <div class="page-content">
      <FacilityTable
        :tableData="listFacilityActivities"
        @handleUpdateTableFacilityActivityData="
          handleUpdateTableFacilityActivityData
        "
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
import FacilityTable from "./components/FacilityTable.vue";
import FilterFormFacilityActivity from "./components/FilterFormFacilityActivity.vue";
import FormButtonTable from "../components/FormButtonTable.vue";
import { useUserStore } from "@/store/userStore";
import { createFacilityAction, getFacilityAction } from "@/api";
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
      this.listFacilityActivities.push({
        date: "",
        facilityID: "",
        fuelSource: "",
        activityType: "",
        fuelAmount: "",
        Units: "",
        isEditable: true,
      });
    },
    handleUpdateTableFacilityActivityData({ index, type, value }) {
      this.listFacilityActivities[index][type] = value;
    },
    handleChange() {
      this.$emit("submit", this.form);
    },
    async handleFetch(formData) {
      if (!this.userStore.getUserInfo()) {
        this.$router.go("/home");
      }

      const response = await getFacilityAction(
        this.userStore.getUserInfo().company_id,
        formData
      );
      this.listFacilityActivities = response.data.data?.map((item) => ({
        date: item.date,
        facilityID: item.company_facility_master_data_id,
        fuelSource: item.fuel_source_name,
        activityType: item.activity_type_name,
        fuelAmount: item.fuel_amount,
        Units: item.Units,
      }));
    },

    async commitData() {
      const response = await createFacilityAction(
        this.listFacilityActivities.map((item) => ({
          company_facility_master_data_id: parseInt(item.facilityID),
          date: item.date,
          fuel_source_id: item.fuelSource,
          activity_type_id: item.activityType,
          fuel_amount: parseFloat(item.fuelAmount),
          Units: item.Units,
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

    const response = await getFacilityAction(
      this.userStore.getUserInfo().company_id
    );
    this.listFacilityActivities = response.data.data?.map((item) => ({
      date: item.date,
      facilityID: item.company_facility_master_data_id,
      fuelSource: item.fuel_source_name,
      activityType: item.activity_type_name,
      fuelAmount: item.fuel_amount,
      Units: item.Units,
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
