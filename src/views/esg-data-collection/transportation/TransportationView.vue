<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Transportation Master Data</h2>
    </div>
    <div class="master-data-table">
      <div class="table-name">Truck</div>
      <div class="table">
        <TruckMasterTable 
          :tableData="listTruckes" 
          @handleUpdateTableTransData="handleUpdateTableTransData"
        />
      </div>
      <div class="form-button">
        <FormButtonTableVue
          :addNewRow="() => addNewRow('TransMaster')"
          :commitData="commitData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FormButtonTableVue from "../components/FormButtonTable.vue";
import TruckMasterTable from "./components/TruckMasterTable.vue";
import { getDataTransport } from "@/api/index.js";
import { useUserStore } from "@/store/userStore";
export default defineComponent({
  components: {
    TruckMasterTable,
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

    const response = await getDataTransport(
      this.userStore.getUserInfo().company_id
    );
    this.listTruckes = response.data.data?.map((item) => ({
      vehicleID: item.id,
      truckMake: item.vehicle_name,
      truckModel: item.vehicle_model,
      truckYear: item.vehicle_year,
      truckMileage: item.vehicle_mileage,
    }));
  },

  data() {
    return {
      listTruckes: [],
    };
  },
  methods: {
    addNewRow(type) {
      if (type === "TransMaster") {
        this.listTruckes.push({
          facilityID: "",
          facilityType: "",
          facilityAddress: "",
          employeeNum: "",
          forkliftNum: "",
          isEditable: true,
        });
      }
    },
    handleUpdateTableTransData({ index, type, value }) {
      this.listTruckes[index][type] = value;
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
