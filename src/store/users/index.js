export default {
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    registerUser({ commit }, payload) {
      let newUser = {
        email: payload.email,
        password: payload.password,
      };

      commit("SET_USER", newUser);
    },

    loginUser({ commit }, payload) {
      let newUser = {
        email: payload.email,
        password: payload.password,
      };

      commit("SET_USER", newUser);
    },

    logoutUser({ commit }) {
      commit("SET_USER", null);
    },

    deleteAccount() {},
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
};
