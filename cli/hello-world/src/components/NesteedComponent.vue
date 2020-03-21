<template>
  <nav class="nesteed-component">
    <h2 @click="changeTitle">{{ title }}</h2>
    <h2>Component parts:</h2>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NesteedComponent',
  data () {
    return {
      title: 'Nesteed Component v1'
    }
  },
  methods: {
    changeTitle(){
      this.title = 'Nesteed Component v2'
    }
  },
  beforeCreate(){
    alert('beforeCreate hook')
    console.log('beforeCreate hook')
  },
  created(){
    alert('created hook')
    console.log('created hook')
  },
  beforeUpdate(){
    alert('beforeUpdate hook')
    console.log('beforeUpdate hook')
  }
}
</script>

<style>
nav.nesteed-component{
  text-align: center;
  background-color: aliceblue;
}
nav.nesteed-component ul{
  padding: 0;
}
nav.nesteed-component li{
  display: inline-block;
  list-style-type: none;
  margin: 10px;
}
</style>
