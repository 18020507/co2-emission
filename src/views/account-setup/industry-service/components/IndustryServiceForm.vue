<template>
  <div class="container-wrap">
    <div class="row-1">
      <div class="row-content">
        <h2>Industry</h2>
      </div>
      <div class="form-data">
        <div class="select-sector">
          <SelectIndustryService
            nameFormChild="Sector"
            :options="sectorOptions"
          />
        </div>
        <div class="select-industry">
          <SelectIndustryService
            nameFormChild="Industry"
            :options="industryOptions"
          />
        </div>
      </div>
    </div>
    <div class="row-2">
      <div class="row-content">
        <h2>Service</h2>
      </div>
      <div class="form-data">
        <div class="select-service">
          <SelectIndustryService
            nameFormChild="Service"
            :options="serviceOptions"
          />
        </div>
        <div class="select-transportation-mode">
          <SelectIndustryService
            nameFormChild="Transportation Mode"
            :options="transportationModeOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SelectIndustryService from "./SelectIndustryService.vue";

export default defineComponent({
  components: { SelectIndustryService },
  data() {
    return {
      sectorOptions: [
        { label: "Energy", value: "energy" },
        { label: "Materials", value: "materials" },
        { label: "Transportation", value: "transportation" },
      ],
      industryOptions: [
        { label: "Air Freight & Logistics", value: "air-freight-logistics" },
        { label: "Airlines", value: "airlines" },
        { label: "Railroads", value: "Railroads" },
      ],
      serviceOptions: [
        { label: "Transportation", value: "transportation" },
        { label: "Warehousing", value: "warehousing" },
        { label: "Freight Forwarding", value: "freight-forwarding" },
        { label: "Express Delivery", value: "express-delivery" },
      ],
      transportationModeOptions: [
        { label: "Trucking", value: "trucking" },
        { label: "Air", value: "air" },
        { label: "Sea", value: "sea" },
      ],
    };
  },
});
</script>

<style scoped>
.row-1 {
  display: flex;
  flex-direction: column;
}
.row-2 {
  display: flex;
  flex-direction: column;
}

.row-content {
  color: green;
  margin: 30px;
}

.form-data {
  display: flex;
  flex-direction: row;
  margin-left: 60px;
  justify-content: space-around;
}
</style>