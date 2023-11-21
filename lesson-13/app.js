const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'https://www.google.com/',
            showBook: true,
            books: [
                {title: 'name of the wind', author:'patrick rothfuss', image: 'asset/image1.jpg'},
                {title: 'the way of kings', author:'brandon sanderson', image: 'asset/image2.jpeg'},
                {title: 'the final empire', author:'brandon sanderson', image: 'asset/image3.jpg'},
            ]
        }
    },
   methods: {
    toggleShowBook() {
        this.showBook = !this.showBook
    }
   }
})

app.mount('#app')