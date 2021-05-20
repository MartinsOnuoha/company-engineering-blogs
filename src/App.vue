<template>
  <component :is="component"></component>
</template>

<script>
import List from './pages/List.vue'

export default {
  data() {
    return {
      component: 'list'
    }
  },
  components: {
    List
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
  margin-top: 60px;
}
</style>
