<template>
  <div class="container-wrap">
    <div class="row">
      <div class="account&settings">
        <div class="section-header">
          <h2>Account & Settings</h2>
        </div>
        <div class="section-content">
          <HomeCard
            cardName="Company Information"
            cardContent="LogistiCorp"
            cardMemo="Logistics & Transportation"
            cardLink="/account-setup/companyInformation"
          />
          <HomeCard cardName="Billing & Subscription"  cardLink="/" />
        </div>
      </div>
      <div class="esgDataCollection">
        <div class="section-header">
          <h2>ESG Data Collection</h2>
        </div>
        <div class="section-content">
          <HomeCard
            cardName="Data Templates Explorer"
            cardContent="100"
            cardMemo="Templates Available"
            cardLink="/"
          />
          <HomeCard
            cardName="Data Collection Table"
            cardContent="3"
            cardMemo="Templates in Use"
            cardLink="/esgDataCollection"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="dataReporting">
        <div class="section-header">
          <h2>Data Reporting</h2>
        </div>
        <div class="section-content">
          <HomeCard cardName="GHG Reporting" cardMemo="Scope 1 & 2"  cardLink="/ghgReporting" />
          <HomeCard cardName="CDP Reporting" cardLink="/cdpReporting" />
          <HomeCard cardName="Dashboard"  cardLink="/dashboard" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="dataAudit">
        <div class="section-header">
          <h2>Data Audit</h2>
        </div>
        <div class="section-content">
          <HomeCard cardName="Audit Trail"  cardLink="/" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HomeCard from "./components/HomeCard.vue";
export default defineComponent({
  components: { HomeCard },
});
</script>

<style scoped>
.container-wrap {
  margin-top: 29px;
  margin-left: 53px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.section-content {
  display: flex;
  flex-direction: row;
}

.esgDataCollection {
  margin-right: 310px;
}

.section-header {
  color: green;
}
</style>
