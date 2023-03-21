<template>
  <div class="navBar">
    <div class="sideBar-head">
      <div v-if="this.$route.fullPath != '/home'" class="icon-sidebar-head">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </div>
      <router-link to="/home">
        <span>Successgy</span>
      </router-link>
    </div>
    <div class="user-info">
      <div class="icon-user-head">
        <font-awesome-icon icon="fa-solid fa-user" />
      </div>
      <span>Roland</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
});
</script>

<style scoped>
.navBar {
  width: 100%;
  height: 82px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #ececec;
}

.sideBar-head {
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  height: 12vh;
  font-weight: bold;
  width: 18vw;
}

.icon-sidebar-head {
  margin-left: 64px;
  color: green;
  margin-right: 28px;
}
.user-info {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-right: 81px;
}

.icon-user-head {
  margin-right: 10px;
}
a {
  text-decoration: none;
  color: black;
}

span {
  color: green;
}
</style>
