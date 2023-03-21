<template>
  <div class="container-wrap">
    <div class="container-login">
      <h1>SUCCESSGY</h1>
      <h2>Sign In</h2>
      <div class="form-login-email">
        <h4>Email</h4>
        <input type="text" v-model="username" name="username" />
      </div>
      <div class="form-login-password">
        <h4>Password</h4>
        <input type="password" v-model="password" name="password" />
      </div>
    </div>
    <div class="button-login">
      <button>Sign In</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.container-wrap {
  width: 404px;
  height: 519px;
  margin: auto;
  background-color: #dcdcdc;
  margin-top: 125px;
}

.container-login {
  margin-top: 31px;
  margin-left: 38px;
}

h1 {
  color: green;
  font-family: "IBM Plex Sans";
  font-style: normal;
}

input {
  width: 85%;
  border-radius: 5px;
  height: 30px;
}

.button-login {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: green;
  color: white;
  border-radius: 5px;
  width: 214px;
  height: 34px;
}
</style>
