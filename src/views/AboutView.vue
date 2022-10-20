<script setup lang="ts">
import TheIntroduction from "../components/TheIntroduction.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <main>
    <TheIntroduction />
  </main>
</template>
