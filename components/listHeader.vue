<template>
    <h2 class="text-white text-2xl lg:text-4xl mb-3 lg:mb-6">{{ headerText }}</h2>
</template>

<script setup>
    const { headerText } = defineProps({
        headerText: {
            required: true
        }
    })
</script>