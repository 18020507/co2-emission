<template>
  <div class="container-wrap">
    <div class="column-left">
      <div class="head-page">
        <h2 class="head-page-content">Scope 1 - Mobile Combusion</h2>
        <SelectConversion />
      </div>
      <div class="table-content">
        <GHGReportingTable :tableData="listReportingData" />
      </div>
      <div class="footer-page">
        <ButtonComponent
          buttonText="Export as CSV"
          buttonIcon="fa-solid fa-file-export"
        />
      </div>
    </div>
    <div class="column-right">
      <AuditTrail />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SelectConversion from "./components/SelectConversion.vue";
import GHGReportingTable from "./components/GHGReportingTable.vue";
import ButtonComponent from "@/components/Button.vue";
import AuditTrail from "./components/AuditTrail.vue";
export default defineComponent({
  components: {
    SelectConversion,
    GHGReportingTable,
    ButtonComponent,
    AuditTrail
  },
  data() {
    return {
      listReportingData: [
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          amountOfFuel: "755217",
          units: "gal",
          co2: "643.73",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          amountOfFuel: "755217",
          units: "gal",
          co2: "643.73",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          amountOfFuel: "755217",
          units: "gal",
          co2: "643.73",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          amountOfFuel: "755217",
          units: "gal",
          co2: "643.73",
        },
        {
          date: "10/25/2022",
          fuelSource: "Gas",
          amountOfFuel: "755217",
          units: "gal",
          co2: "643.73",
        },
      ],
    };
  },
});
</script>

<style scoped>
.container-wrap {
  display: flex;
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  width: 75vw;
}

.column-left {
  width: 70%;
  margin-right: 40px;
}

.column-right {
  width: 350px;
  background-color: rgb(190, 190, 190);
}

.head-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
}
.head-page-content {
  color: green;
}

.table-content {
  margin-bottom: 30px;
  margin-top: 30px;
}

.footer-page {
  display: flex;
  justify-content: flex-end;
}
</style>
