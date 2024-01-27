const app = Vue.createApp({
  //data, funtions
  // template: '<h2>I am a vue template</h2>'
  data() {
    return {
      url: "https://apps.flutterai.dev",
      showbooks: true,
      books: [
        {
          title: "Name of wind",
          author: "some patrik",
          age: 45,
          img: "assets/1.jpg",
          isFave: true,
        },
        {
          title: "The way of kings",
          author: "some brandon",
          age: 45,
          img: "assets/2.jpg",
          isFave: false,
        },
        {
          title: "The final empire",
          author: "some brandon",
          age: 45,
          img: "assets/3.jpg",
          isFave: true,
        },
      ],
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    togglebooks() {
      this.showbooks = !this.showbooks;
    },
    handleEvent(e, data) {
      console.log("Event ", e, e.type);

      if (data) console.log("Event ", e, " ", data);
    },
    handleMouse(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFave(book) {
      book.isFave = !book.isFave;
    },
  },
  computed: {
    filteredbooks() {
      return this.books.filter((book) => book.isFave);
    },
  },
});

app.mount("#app");
