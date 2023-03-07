<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Heavy Truck Data Collection</h2>
    </div>
    <div class="navbar-page">
      <FilterFormHeavyTruck />
    </div>
    <div class="page-content">
      <HeavyTruckTable :tableData="listHeavyTruck" />
    </div>
    <div class="footer-page">
      <div class="list-button-function-table">
        <ButtonComponent
          buttonText="Add new row"
          buttonIcon="fa-solid fa-plus"
          @click="addNewRow"
        />
        <ButtonComponent
          buttonText="Import from excel"
          buttonIcon="fa-solid fa-file-import"
        />
        <ButtonComponent
          buttonText="Connect QuickBook"
          buttonIcon="fa-solid fa-link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/Button.vue";
import HeavyTruckTable from "./components/HeavyTruckTable.vue";
import FilterFormHeavyTruck from "./components/FilterFormHeavyTruck.vue";
export default {
  components: {
    ButtonComponent,
    HeavyTruckTable,
    FilterFormHeavyTruck,
  },
  methods: {
    addNewRow() {
      this.listHeavyTruck.push({});
    },
  },
  data() {
    return {
      listHeavyTruck: [
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          branch: "009",
          vehicle: "755217",
          amount: "643.73",
          gallons: "127.15",
          client: "FLEET X",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          branch: "009",
          vehicle: "755217",
          amount: "643.73",
          gallons: "127.15",
          client: "FLEET X",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          branch: "009",
          vehicle: "755217",
          amount: "643.73",
          gallons: "127.15",
          client: "FLEET X",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          branch: "009",
          vehicle: "755217",
          amount: "643.73",
          gallons: "127.15",
          client: "FLEET X",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          branch: "009",
          vehicle: "755217",
          amount: "643.73",
          gallons: "127.15",
          client: "FLEET X",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 30px;
}
.head-page-content {
  color: green;
}

.list-button-function-table {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 100px;
}
.page-content {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
