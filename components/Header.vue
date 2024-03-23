<script setup>
const props = defineProps({
  title: String,
  content: String
})
</script>

<template>
  <h2 class="py-6 font-bold text-3xl">{{ title }}</h2>
  <p>{{ content }}</p>
</template>

<style scoped>
p {
  height: calc(100vh - 315px);
}
</style>