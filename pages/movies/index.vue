<template>
    this is the movies page
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/movies';
import type { Movie } from '~/types/Movie';

    const moviesStore = useMoviesStore()
    const { data, refresh } = await useAsyncData<Movie[]>('fetchingMovies', async () => {
        return await $fetch('http://localhost:8000/movies');
    })
    
    if(data.value){
        moviesStore.movies = data.value
    }
</script>