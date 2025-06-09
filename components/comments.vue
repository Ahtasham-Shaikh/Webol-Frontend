<template>
    <div class="flex-1 bg-gray-800 rounded p-3 lg:block max-w-3xl lg:w-3xl">
        <h3 class="text-lg font-semibold mb-2 text-white">Comments</h3>
        <ul class="space-y-4 text-sm text-gray-300 overflow-y-auto max-h-96 scrollbar-hide">
            <li v-for="comment in sortedComments" class="bg-gray-700 p-3 rounded">
                <div class="flex justify-between items-center mb-1">
                <span class="font-semibold text-white italic text-xs">{{ comment.userName }}</span>
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
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Comment } from '~/types/Comment';
import type { TvComment } from '~/types/TvShow';
    const { comments } = defineProps({
        comments: {
            type: Array as PropType<Comment[] | TvComment[]>,
            required: true,
        },
    })

    const sortedComments = computed(() => {
        return comments.slice().sort((a, b) => b.upvotes - a.upvotes);
    });
</script>