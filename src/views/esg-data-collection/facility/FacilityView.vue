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
          @handleUpdateTableData="handleUpdateTableData"
        />
      </div>
      <div class="form-button">
        <FormButtonTableVue
          :addNewRow="() => addNewRow('facilityMaster')"
          :commitData="commitData"
        />
      </div>
    </div>
    <div class="master-data-table">
      <div class="table-name">Forklift</div>
      <div class="table">
        <ForkliftMasterTable :tableData="listForklift" />
      </div>
      <div class="form-button">
        <FormButtonTableVue
          :addNewRow="() => addNewRow('forkliftMaster')"
          :commitData="commitData"
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
    handleUpdateTableData({ index, type, value }) {
      this.listFacilities[index][type] = value;
    },
    commitData(type) {
      if (type === "a") {
        this.listHeavyTrucks.push();
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
