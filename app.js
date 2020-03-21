new Vue({
    el: '#app',
    data: {
        title: 'Basic Vue.js instance example',
        god: 'Cthulhu',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        wage: 10
    },
    methods: {
        hello(who) {
            return `Hello, ${who} !!`
        },
        pray() {
            return `Iä ! Iä ! ${this.god} fhtagn !`
        },
        changeWage(amount) {
            this.wage += amount
        }
    }
})