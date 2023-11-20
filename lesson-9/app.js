const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'QuyDN',
            age: 24
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }

})

app.mount('#app')