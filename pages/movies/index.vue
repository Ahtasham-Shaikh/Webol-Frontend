<template>
    <div class="bg-gray-900 w-full">
        <Modal @close="closeComments" :show="showCommentsModal">
            <Comments :comments="featuredMovie?.comments" />
        </Modal>
        <HeroBanner @open-comments="openComments" :movie="featuredMovie" />
        <Card :movie="movie" v-for="movie in moviesStore.movies" />
    </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/movies';
import type { Movie } from '~/types/Movie';

    const showCommentsModal = ref(false)
    const moviesStore = useMoviesStore()
    const { data, refresh } = await useAsyncData<Movie[]>('fetchingMovies', async () => {
        return await $fetch('http://localhost:8000/movies');
    })

    watch(showCommentsModal, (newVal) => {
        // Toggle body overflow
        if (newVal) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    })

    const openComments = () => {
        showCommentsModal.value = true
    }

    const closeComments = () => {
        showCommentsModal.value = false
    }

    const featuredMovie = computed<Movie>(() => {

        return moviesStore.movies.reduce((highest, current) => {
            return current.rating > highest.rating ? current : highest
        })
    })
    
    if(data.value){
        moviesStore.movies = data.value
    }
</script>