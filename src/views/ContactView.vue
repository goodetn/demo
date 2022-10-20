<script setup lang="ts">
import ContactInfo from "../components/ContactInfo.vue";
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
    <ContactInfo />
  </main>
</template>
