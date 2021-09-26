export default {
  state: {
    books: [
      {
        title: "Hobbit",
        author: "Tolkein",
        beganReading: "xxxx",
        finished: "xxx",
        id: "uihoihioj",
      },

      {
        title: "FightClub",
        author: "Palahniuk",
        beganReading: "554545",
        finished: "ppppppp",
        id: "ewfgwefgew",
      },
    ],
  },

  mutations: {
    ADD_BOOK(state, payload) {
      state.books.push(payload);
    },
  },

  actions: {
    addBook({ commit }, payload) {
      const book = {
        title: payload.title,
        author: payload.author,
        id: Math.random(),
        beganReading: new Date(),
        finished: "",
      };

      commit("ADD_BOOK", book);
    },

    finishReadingBook() {},

    addCommentsForBook() {},

    rateBook() {},
  },

  getters: {
    books(state) {
      return state.books;
    },

    singleBook(state) {
      return (bookId) => {
        return state.books.find((book) => {
          return book.id === bookId;
        });
      };
    },
  },
};
