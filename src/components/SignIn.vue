<template>
  <div id="HomePage">
    <logRegTabs />
  </div>
</template>

<script>
import logRegTabs from "./LoginRegister/LogRegTabs.vue";

export default {
  name: "LoginRegisterPage",

  components: {
    logRegTabs,
  },
};
</script>
