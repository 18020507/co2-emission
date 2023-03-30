<template>
  <div class="container-wrap">
    <div class="column-left">
      <div class="head-page">
        <h2 class="head-page-content">Scope 1 - Mobile Combusion</h2>
        <SelectConversion />
      </div>
      <div class="table-content">
        <MobileCombustionTable :tableData="listReportingData" />
      </div>
      <div class="footer-page">
        <ButtonComponent buttonText="Export CSV" />
      </div>
    </div>
    <div class="column-right">
      <AuditTrail />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SelectConversion from "../components/SelectConversion.vue";
import MobileCombustionTable from "./components/MobileCombustionTable.vue";
import ButtonComponent from "@/components/Button.vue";
import AuditTrail from "../components/AuditTrail.vue";
import { useUserStore } from "@/store/userStore";
import { getMobileCombustion } from "@/api";
export default defineComponent({
  components: {
    SelectConversion,
    MobileCombustionTable,
    ButtonComponent,
    AuditTrail,
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  async created() {
    if (!this.userStore.getUserInfo()) {
      this.$router.go("/home");
    }

    this.listReportingData = await getMobileCombustion(
      this.userStore.getUserInfo().company_id
    ).then((res) =>
      res.data.data?.map((item) => ({
        year: item.date,
        vehicleID: item.vehicle_id,
        amountOfFuel: item.amount_of_fuel,
        units: item.units,
        co2: item.co2,
      }))
    );
  },

  data() {
    return {
      listReportingData: [],
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
