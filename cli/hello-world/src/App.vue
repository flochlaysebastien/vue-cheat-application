<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NesteedComponent />
    <PlayersComponent :players='playerList' @offline='offlinePlayer' />
    <OnlinePlayers :players='playerList' />
    <Blogs />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NesteedComponent from './components/NesteedComponent.vue'
import AllPlayers from './components/AllPlayers.vue'
import OnlinePlayers from './components/OnlinePlayers.vue'
import Blogs from './components/Blogs.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NesteedComponent,
    PlayersComponent: AllPlayers,
    OnlinePlayers,
    Blogs
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
  methods: {
    offlinePlayer(payload){
      console.log(payload)
      this.playerList = this.playerList.filter(player => {
        return player.name !== payload.name
      })
      console.log(this.playerList)
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
