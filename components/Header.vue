<template>
  <h2 class="font-bold">{{ title }}</h2>
  <p>{{ content }}</p>
</template>
<script setup>
const props = defineProps({
  title: String,
  content: String
})
</script>