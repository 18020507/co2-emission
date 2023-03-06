<template>
  <div>
    <aside :vue:is-open="isSidebarOpen">
      <div class="sidebar-head">
        <span>Successgy</span>
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <h3 class="menu-title">CORE MODULES</h3>
      <div class="menu-content">
        <div class="menu-link-grade-1">
          <router-link to="/base-data-input">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <span>Base Data Input</span>
          </router-link>
        </div>
        <div class="menu-link-grade-1" @click="openTransactionTag">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <span>Transaction Data Input</span>
        </div>
        <div
          class="menu-link-grade-2"
          @click="openTransportationTag"
          v-show="isOpenTransactionTag"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <span>Transportation</span>
        </div>
        <div class="menu-link-grade-3" v-show="isOpenTransportationTag">
          <router-link to="/heavy-truck">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <span>Heavy Trucks</span>
          </router-link>
        </div>
        <div class="menu-link-grade-1">
          <router-link to="/facility">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <span>Facility</span>
          </router-link>
        </div>
        <div class="menu-link-grade-1" @click="openUtilityTag">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <span>Utility</span>
        </div>
        <div class="menu-link-grade-2">
          <router-link to="/electricity" v-show="isOpenUtilityTag">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <span>Electricity</span>
          </router-link>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  name: "SideBarComponent",
  components: {},
  data: () => {
    return {
      isOpenTransactionTag: false,
      isOpenTransportationTag: false,
      isOpenUtilityTag: false,
    };
  },
  methods: {
    openTransactionTag: function () {
      if (this.isOpenTransactionTag === true) {
        (this.isOpenTransactionTag = false),
          (this.isOpenTransportationTag = false);
      } else {
        this.isOpenTransactionTag = true;
      }
    },
    openTransportationTag: function () {
      if (this.isOpenTransportationTag === true) {
        this.isOpenTransportationTag = false;
      } else {
        this.isOpenTransportationTag = true;
      }
    },
    openUtilityTag: function () {
      if (this.isOpenUtilityTag === true) {
        this.isOpenUtilityTag = false;
      } else {
        this.isOpenUtilityTag = true;
      }
    },
  },
};
</script>
<style scopped>
aside {
  color: green;
  background: lightcyan;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 20vw;
  border-right: 1px gray solid;
}
.sidebar-head {
  font-size: 30px;
  display: flex;
  border-bottom: 1px gray solid;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  height: 12vh;
  font-weight: bold;
}
.menu-title {
  margin: 30px;
  color: black;
  text-decoration-style: solid;
}
.menu-content {
  font-size: 20px;
  margin-left: 30px;
}
.menu-content span {
  margin-left: 10px;
}
.menu-link-grade-1 {
  padding: 10px 0px;
}
.menu-link-grade-2 {
  padding: 10px 10px;
}
.menu-link-grade-3 {
  padding: 10px 20px;
}

router-link:hover {
  color: rgb(83, 203, 250);
}
</style>
