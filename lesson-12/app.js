const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBook: true,
            books: [
                {title: 'name of the wind', author:'patrick rothfuss'},
                {title: 'the way of kings', author:'brandon sanderson'},
                {title: 'the final empire', author:'brandon sanderson'},
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