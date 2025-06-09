<template>
  <div class="bg-gray-900 w-full flex justify-center items-center flex-col">
    <Modal @close="closeComments" :show="showCommentsModal">
      <Comments :comments="featuredShow?.comments" />
    </Modal>
    <HeroBanner @open-comments="openComments" :movie="featuredShow" />
    <Container>
      <Card v-for="show in tvShowsStore.tvShows" :key="show.id" :movie="show" />
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { TvShow } from '~/types/TvShow'

const { showCommentsModal, openComments, closeComments } = useCommentsModal()
const tvShowsStore = useTvShowsStore()

const { data, refresh } = await useAsyncData<TvShow[]>('fetchingTvShows', async () => {
  return await $fetch('http://localhost:8000/tvshows')
})

const featuredShow = computed<TvShow>(() => {
  return tvShowsStore.tvShows.reduce((highest, current) =>
    current.rating > highest.rating ? current : highest
  )
})

if (data.value) {
  tvShowsStore.tvShows = data.value
}
</script>
