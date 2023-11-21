const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBook: true,
            title: 'The Final Empire',
            author: 'QuyDN',
            age: 24,
            x: 0,
            y: 0
        }
    },
   methods: {
    toggleShowBook() {
        this.showBook = !this.showBook
    },
    handleEvent(e, data) {
        console.log(e, e.type);
        if (data) {
            console.log(data);
        }
    },
    handleMouseMove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    }
   }
})

app.mount('#app')