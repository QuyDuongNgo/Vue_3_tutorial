const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBook: true,
            title: 'The Final Empire',
            author: 'QuyDN',
            age: 24
        }
    },
   methods: {
    toggleShowBook() {
        this.showBook = !this.showBook
    }
   }
})

app.mount('#app')