<template>
  <div id="online-players">
    <h2>Online Players</h2>
    <div v-for="(player, index) in players" :key="index">
      <span v-if="player.online">{{ player.name }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OnlinePlayers',
  props: ['players'],
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
