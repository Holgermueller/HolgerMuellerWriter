import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../components/SignIn";
import Dashboard from "../components/Dashboard";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "SignIn",
      component: SignIn,
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      props: true,
    },
  ],
});

export default router;
