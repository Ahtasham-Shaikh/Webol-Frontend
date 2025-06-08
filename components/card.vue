<template>
     <div class="flex bg-gray-900 p-4 shadow-lg text-white space-x-4 mx-auto max-w-[1282px]">
  <!-- Movie Poster -->
  <div class="w-32 h-48 flex-shrink-0">
    <img :src="movie.thumbnail" alt="Movie Poster" class="w-full h-full object-cover rounded" />
  </div>

  <!-- Movie Info -->
  <div class="flex flex-col justify-between w-1/3 space-y-2">
    <div>
      <h2 class="text-xl font-bold">{{ movie.title }}</h2>
      <p class="text-gray-400">Runtime: 2h 28m</p>
      <p class="text-orange-400 font-semibold">Rating: {{ formatNumber(movie.rating) }}</p>
      <p class="text-gray-400">Release: {{ formatDate(movie.releaseDate) }}</p>
    </div>
  </div>

  <!-- Comments Section -->
  <div class="flex-1 bg-gray-800 rounded p-3 overflow-y-auto max-h-48">
    <h3 class="text-lg font-semibold mb-2">Comments</h3>
    <ul class="space-y-4 text-sm text-gray-300">
    <li v-for="comment in sortedComments" class="bg-gray-700 p-3 rounded">
        <div class="flex justify-between items-center mb-1">
        <span class="font-semibold text-white">{{ comment.userName }}</span>
        <button class="flex items-center space-x-1 text-orange-400 hover:text-orange-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
            <span>{{ comment.upvotes }}</span>
        </button>
        </div>
        <p>"{{ comment.review }}"</p>
    </li>
</ul>

  </div>
</div>

</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
import type { Movie } from '~/types/Movie';
    
    const { movie } = defineProps({
        movie: {
            type: Object as PropType<Movie>,
            required: true
        }
    });

    const sortedComments = computed(() => {
        return movie.comments?.slice().sort((a, b) => b.upvotes - a.upvotes);
    });

    function formatDate(isoString: string): string {
        const date: Date = new Date(isoString);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
</script>