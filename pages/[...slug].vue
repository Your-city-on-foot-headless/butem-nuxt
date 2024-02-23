<script setup>
import { ref } from 'vue'
const route = useRoute()
const config = useRuntimeConfig()
// const data1 = await useFetch(config.public.wordpressUrl)
const slug = ref('')
if (route.params.slug) {
  let lastIndex = route.params.slug.length - 1
  if (!route.params.slug[lastIndex]) {
    slug.value = route.params.slug[lastIndex - 1]
  } else {
    slug.value = route.params.slug[lastIndex]
  }
} else {
  slug.value = 'strona-glowna'
}

// const { data, pending, error, refresh } = await useFetch('https://butem-bedrock-wp.ddev.site/wp-json/wp/v2/pages',
// const { data, pending, error, refresh } = await useFetch('https://butem-bedrock-wp.ddev.site/wp-json/wp/v2/own-pages',
const { data, pending, error, refresh } = await useFetch(config.public.wordpressUrl,


  {
    query: { slug: slug.value }
  }
)

console.log('val ', data.value)

</script>
<template>
  <div>
    {{ slug }}
    <!-- {{ data }} -->
    <h1>{{ data !== null ? data[0]?.title.rendered : 'failure' }}</h1>

    <Header :title="data[0]?.title.rendered" :subtitle="data[0]?.content.rendered" />
  </div>
</template>