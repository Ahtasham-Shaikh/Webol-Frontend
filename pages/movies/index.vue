<template>
    <div class="bg-gray-900 w-full flex items-center justify-center flex-col">
        <Modal @close="closeComments" :show="showCommentsModal">
            <Comments :comments="featuredMovie?.comments" />
        </Modal>
        <HeroBanner @open-comments="openComments" :movie="featuredMovie" />
        <Container>
            <ListHeader :header-text="'Latest Movies For You'" />
            <Card :movie="movie" v-for="movie in moviesStore.movies" />
        </Container>
    </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/movies';
import type { Movie } from '~/types/Movie';

    const { showCommentsModal, openComments, closeComments } = useCommentsModal()
    const moviesStore = useMoviesStore()
    const { data, refresh } = await useAsyncData<Movie[]>('fetchingMovies', async () => {
        return await $fetch('http://localhost:8000/movies');
    })

    const featuredMovie = computed<Movie>(() => {

        return moviesStore.movies.reduce((highest, current) => {
            return current.rating > highest.rating ? current : highest
        })
    })
    
    if(data.value){
        moviesStore.movies = data.value
    }
</script>