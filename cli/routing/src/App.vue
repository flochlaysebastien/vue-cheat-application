<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/profile">Profile</router-link>|
      <router-link :to="{ name: 'About' }">About Dynamic</router-link>
    </div>
    <div id="nav">
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile', params: { user_id: id }}">
          <span>{{ id }} Profile</span>
        </router-link>
      </li>
    </div>
    <ul>
      <li><button @click="goBack">Go Back</button></li>
      <li><button @click="goHome">Redirect to Home</button></li>
      <li><button @click="goForward">Go Forward</button></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userIds: ['Jon', 'Tyrion', 'Aria', 'Baelish']
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    },
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: purple;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
