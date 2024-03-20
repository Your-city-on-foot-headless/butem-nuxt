<script setup>
const config = useRuntimeConfig()
const { data: items, pending, error, refresh } = await useFetch(`${config.public.wordpressUrl}/footer-nav`)
const filteredItems = items.value.filter(el => el.name !== "Strona główna")

</script>

<template>
  <nav class="w-screen -mx-16 px-16 py-6 flex items-center justify-between">
    <NuxtLink to="/">
      <img width="109" height="64" src="/assets/images/butem-logo-inversed.png" alt="Logo witryny">
    </NuxtLink>

    <div v-for="item in filteredItems" :key="item.name">
      <NuxtLink :to="item.href" :class="item.classes">
        <span>{{ item.name }}</span>
      </NuxtLink>
    </div>

  </nav>
</template>

<style scoped>
nav {
  color: var(--white-color);
  background-color: var(--dark-grey);
}
</style>