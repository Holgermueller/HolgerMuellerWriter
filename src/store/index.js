import Vue from "vue";
import Vuex from "vuex";

import shared from "./shared";
import books from "./books";
import users from "./users";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    books,
    shared,
    users,
  },
});
