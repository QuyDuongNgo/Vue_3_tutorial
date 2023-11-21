const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'https://www.google.com/',
            showBook: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', image: 'asset/image1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', image: 'asset/image2.jpeg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', image: 'asset/image3.jpg', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBook() {
            this.showBook = !this.showBook
        },
        toggleFavorite(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBook() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')