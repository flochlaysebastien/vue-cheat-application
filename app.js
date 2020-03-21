new Vue({
    el: '#app',
    data: {
      title: 'Basic Vue.js instance example',
      god: 'Cthulhu',
      url: 'http://www.youtube.com',
      classes: ['one', 'two']
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