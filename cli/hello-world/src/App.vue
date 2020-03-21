<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NesteedComponent />
    <PlayersComponent :players='playerList' />
    <OnlinePlayers :players='playerList' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NesteedComponent from './components/NesteedComponent.vue'
import AllPlayers from './components/AllPlayers.vue'
import OnlinePlayers from './components/OnlinePlayers.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NesteedComponent,
    PlayersComponent: AllPlayers,
    OnlinePlayers
  },
  data() {
    return {
      playerList: [
        { name: 'Jon', online: true },
        { name: 'Tyrion', online: false },
        { name: 'Aria', online: true },
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
