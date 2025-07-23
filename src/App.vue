<template>
  <div class="container">
    <div class="list">
      <input @input="filter" placeholder="Seach Company" class="search" type="text">
      <Link v-bind="link" v-for="(link, i) in state.DB" :key="i" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import Link from './components/Link.vue'

const state = reactive({
  allLinks: ref([]),
  DB: ref([]),
})

onMounted(async () => {
  const res = await fetch('/links.json')
  const data = await res.json()
  state.allLinks = data
  state.DB = data
})

const filter = (e) => {
  const value = e.target.value.toLowerCase()
  state.DB = state.allLinks.filter(x => x.name.toLowerCase().includes(value))
}
</script>

<style>
body {
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
  color: #2c3e50;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.search {
  padding: 0.75rem;
  font-size: 16px;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 8px;
  border: none;
}
</style>
