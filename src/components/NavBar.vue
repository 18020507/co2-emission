<template>
  <div class="navBar">
    <div class="listButton">
      <router-link to="/esgDataCollection">
        <ButtonComponent
          buttonText="ESG Data Collection"
          buttonIcon="fa-solid fa-list"
        />
      </router-link>
      <router-link to="/ghgReporting">
        <ButtonComponent
          buttonText="GHG Reporting"
          buttonIcon="fa-solid fa-box-archive"
        />
      </router-link>

      <router-link to="/dashboard">
        <ButtonComponent
          buttonText="Dashboard"
          buttonIcon="fa-solid fa-layer-group"
        />
      </router-link>

      <router-link to="/dataAudit">
        <ButtonComponent
          buttonText="Data Audit"
          buttonIcon="fa-solid fa-arrows-rotate"
        />
      </router-link>

      <router-link to="/account-setup">
        <ButtonComponent
          buttonText="LogisticCorp"
          buttonIcon="fa-solid fa-user"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./Button.vue";
export default {
  components: {
    ButtonComponent,
  },
};
</script>

<style scoped>
.navBar {
  background: lightcyan;
  width: 100%;
  height: 12vh;
}
.listButton {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-right: 40px;
}
</style>
