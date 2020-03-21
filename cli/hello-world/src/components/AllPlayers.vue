<template>
  <div id="all-players">
    <h2>All Players</h2>
    <div v-for="(player, index) in players" :key="index">
      <span @click="offlinePlayer(player.name)">{{ player.name }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AllPlayers',
  props: ['players'],
  data () {
    return {
      
    }
  },
  methods: {
      offlinePlayer(name){
          this.$emit('offline', { name })
      }
  },
}
</script>

<style>

</style>
