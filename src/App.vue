<template>
  <div class="container">
    <div class="list">
      <input @input="filter" placeholder="Seach Company" class="search" type="text">
      <Link v-bind="link" v-for="(link, i) in state.DB" :key="i" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, useContext } from 'vue'
import DB from './datasource/DB'
import Link from './components/Link.vue'

const state = reactive({
  DB: ref(DB),
})

const filter = (e) => {
  state.DB = DB.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase()))
}
</script>

<style>
body {
  background: #de6161;
  background: -webkit-linear-gradient(to right, #2657eb, #de6161);
  background: linear-gradient(to right, #2657eb, #de6161);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
  padding: 5px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search {
  padding: 10px;
  width: 100%;
}
</style>
