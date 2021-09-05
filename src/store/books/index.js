export default {
  state: {
    books: [
      {
        title: "Hobbit",
        author: "Tolkein",
        beganReading: "xxxx",
        finished: "xxx",
      },
      {
        title: "FightClub",
        author: "Palahniuk",
        beganReading: "554545",
        finished: "ppppppp",
      },
    ],
  },

  mutations: {},

  acitons: {},

  getters: {
    books(state) {
      return state.books;
    },
  },
};
