import { defineStore } from 'pinia';
import type { Movie } from '~/types/Movie';

export const useMoviesStore = defineStore('moviesStore', () => {
    const movies = ref<Movie[]>([])

    return {
        movies
    }
})