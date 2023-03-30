<template>
  <div class="container">
    <div class="screen">
      <div class="screen__content">
        <div class="login-form-header">SUCCESSGY</div>
        <div class="sign-in">Sign In</div>
        <form class="login">
          <div class="login__field">
            <h4>Email</h4>
            <input
              type="text"
              class="login__input"
              placeholder="User name / Email"
              v-model="loginForm.username"
            />
          </div>
          <div class="login__field">
            <h4>Password</h4>
            <input
              type="password"
              class="login__input"
              placeholder="Password"
              v-model="loginForm.password"
            />
          </div>
          <button class="button login__submit" @click="getLogin">
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { login, getAuthInfo } from "@/api/index.js";
import axios from "axios";

import { useUserStore } from "@/store/userStore";
import { first } from "lodash-es";

export default defineComponent({
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async getLogin(event) {
      event.preventDefault();
      const { username, password } = this.loginForm;
      const response = await login({
        username_id: username,
        password,
      });
      // if (response.token) {
      //   localStorage.setItem("token", response.token);
      // }
      if (response.status === 200) {
        //TODO: HOTFIX
        localStorage.setItem("access_token", response.data.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access_token}`;

        const userInfo = await getAuthInfo();
        this.userStore.setUserInfo(first(userInfo.data.data));
        this.$router.push("home");
      }
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.screen {
  background: #ffffff;
  position: relative;
  height: 519px;
  width: 404px;
  border-radius: 4px;
}

.login-form-header {
  color: #3e882b;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  margin-top: 31px;
  margin-left: 38px;
}

.sign-in {
  font-weight: 400;
  font-size: 28px;
  text-transform: capitalize;
  margin-top: 15px;
  margin-left: 38px;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.login {
  margin-top: 10px;
  margin-left: 38px;
}

.login__field {
  position: relative;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #6a679e;
}

.login__submit {
  background: #3e882b;
  font-size: 14px;
  margin-top: 48px;
  padding: 16px 20px;
  border-radius: 5px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  width: 85%;
  color: #ffffff;
  cursor: pointer;

  justify-content: center;
  align-items: center;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #6a679e;
  outline: none;
}
</style>
