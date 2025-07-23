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
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    width: 100%;
  }

  .link__icon {
    font-size: 24px;
    margin-right: 1rem;
  }

  .link__content {
    text-align: left;
  }

  .link__url {
    background-color: #ffecb3;
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>
