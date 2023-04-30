<template>
  <div class="container-wrap">
    <div class="column-left">
      <div class="head-page">
        <h2 class="head-page-content">GHG Summary Report</h2>
        <SelectConversion />
      </div>
      <div class="table-content">
        <SummaryTable :tableData="listSummaryData" />
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
import SummaryTable from "./components/SummaryTable.vue";
import ButtonComponent from "@/components/Button.vue";
import AuditTrail from "../components/AuditTrail.vue";
import { useUserStore } from "@/store/userStore";
import { getSummaryReport } from "@/api";
export default defineComponent({
  components: {
    SelectConversion,
    SummaryTable,
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

    this.listSummaryData = await getSummaryReport(
      this.userStore.getUserInfo().company_id
    ).then((res) =>
      res.data.data?.map((item) => ({
        scope: item.scope,
        activityType: item.activity_type,
        co2: item.co2,
      }))
    );
  },
  data() {
    return {
      listSummaryData: [],
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
