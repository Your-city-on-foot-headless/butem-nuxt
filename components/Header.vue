<template>
  <div>
    <div>
      <h2 class="font-bold">{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: String
})
</script>