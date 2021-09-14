<template>
  <div id="logRegTabs">
    <v-card class="login-register" width="600">
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab v-for="(form, index) in forms" :key="index">
          <h2>
            <v-icon left>
              {{ form.icon }}
            </v-icon>
            {{ form.formName }}
          </h2>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(form, index) in forms" :key="index">
          <v-card>
            <v-card-title class="text-center">
              <h3>
                {{ form.formName }}
              </h3>
            </v-card-title>

            <v-card-text>
              <div v-if="form.formName === 'Register'">
                <h2>
                  register form
                </h2>
              </div>

              <div v-else>
                Login form
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginRegisterTabs",

  data() {
    return {
      tab: null,

      forms: [
        {
          formName: "Login",
          formMessage: "Log In Here:",
          icon: "mdi-keyboard",
        },
        {
          formName: "Register",
          formMessage: "Register Here",
          icon: "mdi-pen",
        },
      ],
    };
  },
};
</script>

<style scoped>
.login-register {
  margin: 9% auto;
}
</style>
