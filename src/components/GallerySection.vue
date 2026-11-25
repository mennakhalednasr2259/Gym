<script setup>
import { nextTick, ref, watch } from 'vue'

defineProps({ showMore: { type: Boolean, default: false } })

const photos = [1, 2, 3, 4, 5, 6].map((number) => ({
  number,
  size: number === 3 || number === 4 ? 'small_img' : 'big_img',
}))
const selectedPhoto = ref(null)
const dialog = ref(null)
const closeButton = ref(null)
const lastTrigger = ref(null)

function openPhoto(number, event) {
  lastTrigger.value = event.currentTarget
  selectedPhoto.value = number
}

function closePhoto() {
  if (dialog.value?.open) dialog.value.close()
  else selectedPhoto.value = null
}

watch(selectedPhoto, async (number) => {
  await nextTick()
  if (number && dialog.value && !dialog.value.open) {
    dialog.value.showModal()
    closeButton.value?.focus()
  } else if (!number && dialog.value?.open) {
    dialog.value.close()
  }
})

function onDialogClosed() {
  selectedPhoto.value = null
  lastTrigger.value?.focus()
}

</script>

<template>
  <div class="gallery_area" aria-label="Gym photo gallery">
    <div v-for="photo in photos" :key="photo.number" class="single_gallery" :class="photo.size">
      <div class="hover_pop">
        <button class="popup-image gallery-open" type="button" :aria-label="`Open gym gallery photo ${photo.number}`" @click="openPhoto(photo.number, $event)">
          <i class="ti-plus" aria-hidden="true" />
        </button>
      </div>
      <img :src="useAssetPath(`/img/gallery/${photo.number}.png`)" :alt="`Gym gallery photo ${photo.number}`" loading="lazy" decoding="async">
    </div>
  </div>
  <NuxtLink v-if="showMore" to="/gallery" class="view_pore boxed-btn3">View More</NuxtLink>
  <Teleport to="body">
    <dialog ref="dialog" class="gallery-lightbox" aria-label="Gym gallery photo" @click="$event.target === $event.currentTarget && closePhoto()" @close="onDialogClosed">
      <button ref="closeButton" class="gallery-lightbox-close" type="button" aria-label="Close photo" @click="closePhoto">×</button>
      <img v-if="selectedPhoto" :src="useAssetPath(`/img/gallery/${selectedPhoto}.png`)" :alt="`Gym gallery photo ${selectedPhoto}`">
    </dialog>
  </Teleport>
</template>

