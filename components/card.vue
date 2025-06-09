<template>
<div class="flex bg-gray-900 py-4 shadow-lg text-white space-x-4 w-full">
  <!-- Movie Poster -->
  <div class="w-40 h-60 lg:w-60 lg:h-80 flex-shrink-0">
    <img :src="movie.thumbnail" alt="Movie Poster" class="w-full h-full object-cover rounded" />
  </div>

  <!-- Movie Info -->
  <div class="flex flex-col justify-between space-y-2 w-full lg:w-1/3">
    <div class="flex flex-col gap-2 lg:gap-3">
      <h2 class="text-xl font-bold">{{ movie.title }}</h2>
      <p class="text-gray-400">Runtime: 2h 28m</p>
      <p class="text-orange-400 font-semibold">Rating: ⭐{{ formatNumber(movie.rating) }} / 5</p>
      <p class="text-gray-400">{{ 'releaseDate' in movie ? 'Release Date' : 'First Aired' }}: {{ formatDate(releaseOrAirDate) }}</p>
    </div>
    <button
      @click="showCommentsModal = true"
      v-if="movie.comments && movie.comments.length"
      class="lg:hidden mt-0 inline-block px-3 py-2 text-sm bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition cursor-pointer"
    >
      See Comments ({{ movie.comments.length }})
    </button>
  </div>

  <!-- Desktop Comments -->
  <div class="hidden lg:block">
    <Comments :comments="movie.comments" />
  </div>

  <!-- Modal for Mobile -->
  <Modal @close="showCommentsModal = false" :show="showCommentsModal">
    <Comments :comments="movie.comments" />
  </Modal>
</div>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
import type { Movie } from '~/types/Movie';
import type { TvShow } from '~/types/TvShow';
    
    const showCommentsModal = ref(false)

    const { movie } = defineProps({
        movie: {
            type: Object as PropType<Movie | TvShow>,
            required: true
        }
    });

    const releaseOrAirDate = computed(() => {
      return 'releaseDate' in movie
        ? movie.releaseDate
        : movie.firstAirDate
    })

</script>