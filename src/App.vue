<template>
  <div class="app">
    <div class="header">
      <h1 class="title">Company Engineering Blogs</h1>
      <p class="subtitle">Discover the latest insights from top tech companies</p>
      <div class="search-container">
        <input
          @input="filter"
          placeholder="Search companies..."
          class="search"
          type="text"
        >
      </div>
    </div>
    <div class="grid-container">
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f5f5f5;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  min-height: 100vh;
  background: #f5f5f5;
}

.header {
  background: white;
  padding: 3rem 2rem 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 400;
}

.search-container {
  max-width: 500px;
  margin: 0 auto;
}

.search {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  background: white;
  transition: all 0.2s ease;
  outline: none;
}

.search:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.search::placeholder {
  color: #9ca3af;
}

.grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .header {
    padding: 2rem 1rem 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .grid-container {
    grid-template-columns: 1fr;
    padding: 0 1rem 2rem;
    gap: 1rem;
  }
}
</style>
