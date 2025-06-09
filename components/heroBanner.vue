<template>
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white bg-black pt-[72px] mb-8 lg:mb-10 "
    :style="{
      '--bg-mobile': `url(${movie.thumbnail})`,
      '--bg-desktop': `url(${movie.backdrop})`,
    }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-10 z-10 opacity-50"></div>

    <!-- Content -->
    <div class="relative z-10 px-6 max-w-3xl">
      <h2 class="text-sm md:text-base uppercase tracking-widest text-yellow-400">
        Editor's Pick
      </h2>

      <h1 class="mt-2 text-4xl md:text-6xl font-bold">
        {{ movie.title }}
      </h1>

      <p class="mt-2 text-lg text-gray-300">
        <p class="text-gray-400">{{ 'releaseDate' in movie ? 'Release Date' : 'First Aired' }}: {{ formatDate(releaseOrAirDate) }}</p>
      </p>

      <p v-if="movie.rating" class="mt-1 text-md text-yellow-300">
        ⭐ {{ movie.rating.toFixed(1) }} / 5
      </p>

      <button
        @click="openComments"
        v-if="movie.comments && movie.comments.length"
        class="inline-block mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition cursor-pointer"
      >
        See Comments ({{ movie.comments.length }})
    </button>
    </div>
  </section>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { Movie } from '~/types/Movie';
    import type { TvShow } from '~/types/TvShow';

    const emit = defineEmits(['openComments'])

    const { movie } = defineProps({
        movie: {
            type: Object as PropType<Movie | TvShow>,
            required: true
        }
    });

    const openComments = () => {
      emit('openComments')
    }

    const releaseOrAirDate = computed(() => {
      return 'releaseDate' in movie
        ? movie.releaseDate
        : movie.firstAirDate
    })

</script>

<style lang="scss" scoped>
  section{
    background-image: var(--bg-mobile);
  }

  @media (min-width: 1024px) {
    section{
      background-image: var(--bg-desktop);
    }
  }
</style>