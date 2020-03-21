new Vue({
    el: '#app',
    data: {
      title: 'Basic Vue.js instance example',
      god: 'Cthulhu'
    },
    methods: {
        hello(who){
            return `Hello, ${who} !!`
        },
        pray(){
            return `Iä ! Iä ! ${this.god} fhtagn !`
        }
    }
  })