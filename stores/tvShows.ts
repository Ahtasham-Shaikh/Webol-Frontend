import type { TvShow } from "~/types/TvShow"

export const useTvShowsStore = defineStore('tvShowsStore', () => {
    const tvShows = ref<TvShow[]>([])
    
    return {
        tvShows
    }
})