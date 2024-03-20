<script setup>
const route = useRoute()
const config = useRuntimeConfig()

</script>
<template>
  <div class="w-screen h-[430px] -mt-1 -mx-16">
    <NuxtPicture format="webp" src="landing/pexels-jakub-zerdzicki-19736144.jpg"
      :imgAttrs="{ class: 'w-screen h-full image__size--full' }" />
    <h1>Eksploruj skarby miasta</h1>
  </div>
</template>

<style>
.image__size--full {
  object-fit: cover;
  object-position: bottom;
}
</style>