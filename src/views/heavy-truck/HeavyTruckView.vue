<template>
  <div class="container">
    <div class="side-bar">
      <SidebarESGDataCollection />
    </div>
    <div class="content">
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
  </div>
</template>

<script>
import ButtonComponent from "@/components/Button.vue";
import HeavyTruckTable from "./components/HeavyTruckTable.vue";
import FilterFormHeavyTruck from "./components/FilterFormHeavyTruck.vue";
import SidebarESGDataCollection from "./components/SidebarESGDataCollection.vue";
export default {
  components: {
    ButtonComponent,
    HeavyTruckTable,
    FilterFormHeavyTruck,
    SidebarESGDataCollection,
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
  computed: {
    nodes() {
      return [
        {
          id: 1,
          label: "Base Data Input",
          children: [],
        },
        {
          id: 2,
          label: "Transaction Data Input",
          children: [
            {
              id: 3,
              label: "Transportation",
              children: [
                {
                  id: 4,
                  label: "Heavy Trucks",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          label: "Facility",
          children: [],
        },
        {
          id: 6,
          label: "Utility",
          children: [
            {
              id: 7,
              label: "Electricity",
            },
          ],
        },
      ];
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
}

.side-bar{
  height: 100vh;
  width: 18vw;
  border-right: 1px gray solid; 
}

.content {
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
