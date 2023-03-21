<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Company Master Data</h2>
    </div>
    <div class="master-data-table">
      <div class="table-name">Company Facilities</div>
      <div class="table">
        <CompanyFacilityTableVue :tableData="listCompanyFacilities" />
      </div>
      <div class="form-button">
        <FormButtonTableVue />
      </div>
    </div>
    <div class="master-data-table">
      <div class="table-name">Heavy Trucks</div>
      <div class="table">
        <HeavyTruckTableVue :tableData="listHeavyTrucks" />
      </div>
      <div class="form-button">
        <FormButtonTableVue />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FormButtonTableVue from "../components/FormButtonTable.vue";
import CompanyFacilityTableVue from "./components/CompanyFacilityMasterTable.vue";
import HeavyTruckTableVue from "./components/HeavyTruckMasterTable.vue";
export default defineComponent({
  components: {
    CompanyFacilityTableVue,
    HeavyTruckTableVue,
    FormButtonTableVue,
  },
  data() {
    return {
      listCompanyFacilities: [
        {
          facilityType: "Headquarter",
          facilityAddress: "Irving, TX",
          employeeNo: "200",
          forkliftNo: "0",
          forkliftID: "-",
        },
        {
          facilityType: "Headquarter",
          facilityAddress: "Irving, TX",
          employeeNo: "200",
          forkliftNo: "0",
          forkliftID: "-",
        },
        {
          facilityType: "Headquarter",
          facilityAddress: "Irving, TX",
          employeeNo: "200",
          forkliftNo: "0",
          forkliftID: "-",
        },
        {
          facilityType: "Headquarter",
          facilityAddress: "Irving, TX",
          employeeNo: "200",
          forkliftNo: "0",
          forkliftID: "-",
        },
      ],
      listHeavyTrucks: [
        {
          vehicleID: "755217",
          truckMake: "Toyata",
          truckModel: "Tacoma",
          truckYear: "2015",
          truckMileage: "4,512",
        },
        {
          vehicleID: "755217",
          truckMake: "Toyata",
          truckModel: "Tacoma",
          truckYear: "2015",
          truckMileage: "4,512",
        },
        {
          vehicleID: "755217",
          truckMake: "Toyata",
          truckModel: "Tacoma",
          truckYear: "2015",
          truckMileage: "4,512",
        },
        {
          vehicleID: "755217",
          truckMake: "Toyata",
          truckModel: "Tacoma",
          truckYear: "2015",
          truckMileage: "4,512",
        },
      ],
    };
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
