<template>
  <div class="container-wrap">
    <div class="column-left">
      <div class="head-page">
        <h2 class="head-page-content">CDP Report</h2>
      </div>
      <div class="pdf-view">
        <object
          data="CDP-Questionnaire-example.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>
            Your browser does not support PDFs.
            <a href="CDP-Questionnaire-example.pdf"
              >Download the PDF</a
            >
          </p>
        </object>
      </div>
    </div>
    <div class="column-right">
      <AuditTrail />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AuditTrail from "./components/AuditTrail.vue";
export default defineComponent({
  components: {
    AuditTrail,
  },
});
</script>

<style scoped>
.container-wrap {
  display: flex;
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
}

.pdf-view {
  margin-left: 145px;
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
</style>
