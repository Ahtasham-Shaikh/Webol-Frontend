import { ref, watch } from 'vue'

export function useCommentsModal() {
  const showCommentsModal = ref(false)
  
  watch(showCommentsModal, (newVal) => {
    document.body.classList.toggle('overflow-hidden', newVal)
  })

  const openComments = () => {
    showCommentsModal.value = true
  }

  const closeComments = () => {
    showCommentsModal.value = false
  }

  return {
    showCommentsModal,
    openComments,
    closeComments,
  }
}
