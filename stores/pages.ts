import { defineStore } from "pinia";

export const usePages = defineStore("pages", {
  state: () => ({
    pages: [
      [
        {
          color: "green",
          pic: "/pics/3.jpg",
          link: "/test3",
        },
        {
          color: "green",
          pic: "/pics/4.jpg",
          link: "/test4",
        },
        {
          color: "green",
          pic: "/pics/5.jpg",
          link: "/test5",
        },
      ],
      [
        {
          color: "red",
          pic: "/pics/1.jpg",
          link: "/test",
        },
        {
          color: "purple",
          pic: "/pics/7.jpg",
          link: "/test7",
        },
        {
          color: "white",
          pic: "/pics/8.jpg",
          link: "/test8",
        },
      ],

      [
        {
          color: "yellow",
          pic: "/pics/6.jpg",
          link: "/test6",
        },
        {
          color: "blue",
          pic: "/pics/2.jpeg",
          link: "/test2",
        },

        {
          color: "red",
          pic: "/pics/9.png",
          link: "/test9",
        },
      ],
      [
        {
          color: "red",
          pic: "/pics/10.jpg",
          link: "/test10",
        },
      ],
    ],
  }),

  actions: {},
  getters: {
    getPages(state) {
      return state.pages;
    },
    getPicsByLink: (state) => {
      return (link: string) =>
        [].concat(...state.pages).find((page) => page.link == "/" + link);
    },
    getAsks(state) {
      return state.asks.slice(0, state.selectedCounts);
    },
  },
});
