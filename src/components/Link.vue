<template>
  <div class="link">
    <div class="link__icon">
      🔗
    </div>
    <div class="link__content">
      <div><h3>{{ name }}</h3></div>
      <div class="link__url"><a :href="link" target="_blank">{{ link }}</a></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps,  } from 'vue'

const props = defineProps({
  name: String,
  link: String,
});
</script>

<style>
  .link {
    background: #FFF;
    padding: 12px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
  }
  .link__icon {
    font-size: 30px;
    margin-right: 2rem;
  }
  .link__content {
    text-align: left;
    max-width: 78%;
    overflow: hidden;
  }
  .link__url {
    background-color: #FFCC80;
    padding: 5px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>
