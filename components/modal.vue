<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/60">
    <div
    ref="modal"
    :class="[
      'rounded-t-2xl lg:rounded-2xl shadow-lg w-full max-w-3xl relative',
      isMobile ? 'animate-slide-up' : 'animate-scale-in'
    ]"
    >
    <img @click="close" class="lg:hidden absolute left-1/2 -translate-x-1/2 -top-14 w-10 h-10" src="https://cdn.houzeo.com/images/modalImages/close_new.svg" alt="">
      <!-- ✕ Close Icon -->
      <span
        @click="close"
        class="absolute hidden lg:block top-2 right-3 text-gray-600 text-2xl rounded-full px-2 pb-1 cursor-pointer hover:text-gray-400 shadow"
      >
        &times;
      </span>

      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

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

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<style scoped>
@keyframes buyerOpenMobAnim {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
}

@keyframes buyerOpenAnim {
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}

.animate-slide-up {
  animation: buyerOpenMobAnim 0.3s ease-out forwards;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.animate-scale-in {
  animation: buyerOpenAnim 0.3s ease-out forwards;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
