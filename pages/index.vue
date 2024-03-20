<script setup>
const route = useRoute()
const config = useRuntimeConfig()

</script>
<template>
  <div class="relative w-screen h-[430px] -mt-1 -mx-16">
    <NuxtPicture format="webp" src="landing/pexels-jakub-zerdzicki-19736144.jpg"
      :imgAttrs="{ class: 'w-screen h-full image__size--full' }" />
    <h1 class="absolute bottom-5 left-16 header__header--one">Eksploruj skarby miasta</h1>
  </div>
</template>

<style>
.image__size--full {
  object-fit: cover;
  object-position: bottom;
}

.header__header--one {
  padding: 15px;
  color: var(--white-color);
  font-size: 66px;
  font-weight: 700;
  background-color: rgba(27, 30, 46, 0.73);
  border-radius: 20px;
}
</style>