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

  mutations: {},

  acitons: {},

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
