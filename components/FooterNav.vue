<script setup>
const config = useRuntimeConfig()
const { data: items, pending, error, refresh } = await useFetch(`${config.public.wordpressUrl}/footer-nav`)
const filteredItems = items.value.filter(el => el.name !== "Strona główna")

</script>

<template>
  <nav class="w-screen -mx-16 px-16 py-6 flex items-center justify-between">
    <NuxtLink to="/">
      <img width="109" height="64" src="/src/images/butem-logo-inversed.png" alt="Logo witryny">
    </NuxtLink>
    <!-- <div class="flex items-center gap-x-16"> -->

    <div v-for="item in filteredItems" :key="item.name">
      <NuxtLink :to="item.href" :class="item.classes">
        <span>{{ item.name }}</span>
      </NuxtLink>
    </div>

    <!-- </div> -->
  </nav>
</template>

<style scoped>
nav {
  color: #fff;
  background-color: #1B2C2E;
}
</style>