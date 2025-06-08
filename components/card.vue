<template>
     <div class="flex bg-gray-900 p-4 shadow-lg text-white space-x-4 mx-auto max-w-[1282px]">
  <!-- Movie Poster -->
  <div class="w-40 h-60 lg:w-60 lg:h-80 flex-shrink-0">
    <img :src="movie.thumbnail" alt="Movie Poster" class="w-full h-full object-cover rounded" />
  </div>

  <!-- Movie Info -->
  <div class="flex flex-col justify-between lg:w-1/3 space-y-2 w-full">
    <div class="flex gap-2 flex-col lg:gap-3">
      <h2 class="text-xl font-bold">{{ movie.title }}</h2>
      <p class="text-gray-400">Runtime: 2h 28m</p>
      <p class="text-orange-400 font-semibold">Rating: {{ formatNumber(movie.rating) }}</p>
      <p class="text-gray-400">{{ 'releaseDate' in movie ? 'Release Date' : 'First Aired' }}: {{ formatDate(releaseOrAirDate) }}</p>
    </div>
  </div>

  <Comments :comments="movie.comments" />
  
</div>

</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
import type { Movie } from '~/types/Movie';
import type { TvShow } from '~/types/TvShow';
    
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