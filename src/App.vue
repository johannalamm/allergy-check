<template>
  <div id="app">
    <div id="nav">
      <NavigationBar/>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationBar from '@/components/NavigationBar.vue' // @ is an alias to /src

@Component({
  components: {
    NavigationBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(44,62,80);

  a {
    color: rgb(44,62,80);
    text-decoration: none;
  }
}
</style>
