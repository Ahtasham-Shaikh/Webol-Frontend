<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
    <div
      ref="modal"
      class="bg-gray-200 rounded-lg shadow-lg w-full max-w-3xl relative animate-modal-open"
    >
      <!-- ✕ Close Icon -->
    <span
        @click="close"
        class="absolute top-2 right-3 text-gray-600 text-xl bg-white rounded-full px-2 pb-1 cursor-pointer hover:text-gray-800 shadow"
        >
        &times;
        </span>

      <slot class="!max-h-[300px]" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const isVisible = ref(props.show)

watch(() => props.show, (newVal) => {
  isVisible.value = newVal
})

const close = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.animate-modal-open {
  animation: buyerOpenAnim 0.3s ease-out forwards;
}

@keyframes buyerOpenAnim {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

</style>
