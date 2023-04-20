<template>
  <div class="container">
    <div class="section-head">Company Information</div>
    <div class="section-content">
      <div class="column">
        <div class="columnContent">
          <h3>Legal Name</h3>
          <input type="text" v-model="companyForm.legalName" />
        </div>
        <div class="columnContent">
          <h3>Legal Address</h3>
          <input type="text" v-model="companyForm.legalAddress" />
        </div>
        <div class="columnContent">
          <h3>Employer Identification Number (EIN)</h3>
          <input
            type="number"
            v-model="companyForm.EmployeeIdentificationNumber"
          />
        </div>
        <div class="columnContent">
          <h3>Company Number of Facilities</h3>
          <input type="number" v-model="companyForm.companyNumberOfFacility" />
        </div>
        <div class="columnContent">
          <h3>Company Industry</h3>
          <input type="text" v-model="companyForm.companyIndustry" />
        </div>
      </div>
      <div class="column">
        <div class="columnContent">
          <h3>Contact Name</h3>
          <input type="text" v-model="companyForm.contactName" />
        </div>
        <div class="columnContent">
          <h3>Contact Email</h3>
          <input type="text" v-model="companyForm.contactEmail" />
        </div>
        <div class="columnContent">
          <h3>Contact Phone Number</h3>
          <input type="text" v-model="companyForm.contactPhoneNumber" />
        </div>
        <div class="columnContent">
          <h3>Company Sector</h3>
          <input type="text" v-model="companyForm.companySector" />
        </div>
        <div class="columnContent">
          <h3>Company Services</h3>
          <input type="text" v-model="companyForm.companyService" />
        </div>
      </div>
    </div>
    <div class="section-footer">
      <ButtonVue buttonText="Submit" @click="handleSubmit" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { first } from "lodash-es";
import ButtonVue from "@/components/Button.vue";
import { useUserStore } from "@/store/userStore";

import {
  createCompanyInformation,
  getCompanyInformationById,
} from "@/api/index.js";

const companyForm = ref({
  legalName: null,
  legalAddress: null,
  EmployeeIdentificationNumber: null,
  companyNumberOfFacility: null,
  companyIndustry: null,
  contactName: null,
  contactEmail: null,
  contactPhoneNumber: null,
  companySector: null,
  companyService: null,
});
const handleSubmit = async (event) => {
  event.preventDefault();
  const {
    legalName,
    legalAddress,
    EmployeeIdentificationNumber,
    companyNumberOfFacility,
    companyIndustry,
    contactName,
    contactEmail,
    contactPhoneNumber,
    companySector,
    companyService,
  } = this.companyForm;
  console.log(localStorage.getItem("access_token"));
  const response = await createCompanyInformation({
    token_str: localStorage.getItem("access_token"),
    legal_name: legalName,
    contact_name: contactName,
    legal_address: legalAddress,
    contact_email: contactEmail,
    employer_identification_number: EmployeeIdentificationNumber,
    contact_phone_number: contactPhoneNumber,
    company_number_of_facilities: companyNumberOfFacility,
    company_sector: companySector,
    company_industry: companyIndustry,
    company_service: companyService,
  });
  if (response.status === 200) {
    this.$router.push("home");
  }
};

onMounted(async () => {
  const userStore = useUserStore();
  const { data } = await getCompanyInformationById(
    userStore.getUserInfo().company_id
  );
  console.log(data.data);
  const company = first(data.data);

  Object.assign(companyForm.value, {
    legalName: company?.legal_name,
    legalAddress: company?.legal_address,
    EmployeeIdentificationNumber: company?.employer_identification_number,
    companyNumberOfFacility: company?.company_number_of_facilities,
    companyIndustry: company?.company_industry,
    contactName: company?.contact_name,
    contactEmail: company?.contact_email,
    contactPhoneNumber: company?.contact_phone_number,
    companySector: company?.company_sector,
    companyService: company?.company_service,
  });
});
</script>
<style scoped>
.container {
  margin-top: 34px;
  margin-left: 38px;
}

.section-head {
  font-weight: bold;
  color: green;
  font-size: 20px;
}

.section-content {
  display: flex;
  flex-direction: row;
  margin-left: 61px;
}

input {
  width: 337px;
  border-radius: 5px;
  padding: 10px 10px;
  border: none;
}

.column {
  margin-right: 100px;
}

.section-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  padding-right: 150px;
}
</style>
