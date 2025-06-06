<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  useHead({
    title: 'Webol Entertainment App',
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://webol.co.uk/wp-content/uploads/2022/10/cropped-Webol_Logomark-FullGradient-White-32x32.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
    ]
  })
</script>