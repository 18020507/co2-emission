<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Facility Master Data</h2>
    </div>
    <div class="master-data-table">
      <div class="table-name">Facility</div>
      <div class="table">
        <FacilityMasterTableVue
          :tableData="listFacilities"
          @handleUpdateTableFacilityData="handleUpdateTableFacilityData"
        />
      </div>
      <div class="form-button">
        <FormButtonTableVue
          :addNewRow="() => addNewRow('facilityMaster')"
          :commitData="() => commitData('facilityMaster')"
        />
      </div>
    </div>
    <div class="master-data-table">
      <div class="table-name">Forklift</div>
      <div class="table">
        <ForkliftMasterTable
          :tableData="listForklift"
          @handleUpdateTableForkliftData="handleUpdateTableForkliftData"
        />
      </div>
      <div class="form-button">
        <FormButtonTableVue
          :addNewRow="() => addNewRow('forkliftMaster')"
          :commitData="() => this.commitData('forkliftMaster')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { getDataFacility, getForklift } from "@/api/index.js";

import FormButtonTableVue from "../components/FormButtonTable.vue";
import ForkliftMasterTable from "./components/ForkliftMasterTable.vue";
import FacilityMasterTableVue from "./components/FacilityMasterTable.vue";
import { useUserStore } from "@/store/userStore";
import { createDataMaster } from "@/api/facility_master_data/facility_master_data";

export default defineComponent({
  components: {
    ForkliftMasterTable,
    FacilityMasterTableVue,
    FormButtonTableVue,
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
    this.listFacilities = data.data?.map((item) => ({
      facilityID: item.id,
      facilityType: item.facility_type,
      facilityAddress: item.facility_address,
      employeeNum: item.employee_no,
      forkliftNum: item.forklift_no,
    }));

    this.listForklift = (
      await Promise.all(
        this.listFacilities
          .map((item) => item.facilityID)
          .map((facilityID) => {
            return getForklift(facilityID).then((res) =>
              res.data.data.map((item) => ({
                forkliftID: item.id,
                forkliftModel: item.forklift_model,
                fuelType: item.fuel_type,
                fuelEfficiency: item.fuel_efficiency,
                unit: item.units,
                facilityID: item.facility_master_data_id,
              }))
            );
          })
      )
    ).flat();
  },
  data() {
    return {
      listFacilities: [],
      listForklift: [],
    };
  },
  methods: {
    addNewRow(type) {
      if (type === "facilityMaster") {
        this.listFacilities.push({
          facilityID: "",
          facilityType: "",
          facilityAddress: "",
          employeeNum: "",
          forkliftNum: "",
          isEditable: true,
        });
      }
      if (type === "forkliftMaster") {
        this.listForklift.push({
          forkliftID: "",
          forkliftModel: "",
          fuelType: "",
          fuelEfficiency: "",
          unit: "",
          facilityID: "",
          isEditable: true,
        });
      }
    },
    handleUpdateTableFacilityData({ index, type, value }) {
      this.listFacilities[index][type] = value;
    },
    handleUpdateTableForkliftData({ index, type, value }) {
      this.listForklift[index][type] = value;
    },
    async commitData(type) {
      if (type === "facilityMaster") {
        const response = await createDataMaster(
          this.listFacilities.map((item) => ({
            company_id: this.userStore.getUserInfo().company_id,
            facility_address: item.facilityAddress,
            facility_type: item.facilityType,
            employee_no: parseInt(item.employeeNum),
            forklift_no: parseInt(item.forkliftNum),
          }))
        );
        if (response.status === 200) {
          console.log("Success");
        }
      } else if (type === "forkliftMaster") {
        this.listForklift.push();
      }
    },
  },
});
</script>

<style scoped>
.head-page-content {
  color: green;
}

.table-name {
  font-weight: bold;
  margin-left: 23px;
  margin-bottom: 11px;
  margin-top: 20px;
}
.form-button {
  margin-top: 10px;
  width: 80%;
}
</style>
