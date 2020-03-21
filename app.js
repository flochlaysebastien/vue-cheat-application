new Vue({
    el: '#app',
    data: {
        title: 'Basic Vue.js instance example',
        god: 'Cthulhu',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        name: 'Sebastien'
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
        },
        logEvent(e) {
            console.log(e);
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e) {
            // console.log(e.target.value)
            this.name = e.target.value
        }
    }
})