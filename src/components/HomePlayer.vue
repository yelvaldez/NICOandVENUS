<script setup>
import {ref} from 'vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPause from '@/components/icons/IconPause.vue'

import OML from '@/assets/audio/OML.mp3'
const audio = new Audio(OML);

const isPlaying = ref(false)

audio.addEventListener('playing', function () {
  isPlaying.value = true;
}, false);

audio.addEventListener('pause',  function() {
  isPlaying.value = false;
}, false);

audio.addEventListener('ended',  function() {
  isPlaying.value = false;
}, false);

function playShitSong () {
  if (isPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }
}
</script>

<template>
  <div
    class="fixed bottom-5 right-5 z-[99] size-[70px] rounded-full  bg-white shadow-lg border border-slate-100 cursor-pointer hover:scale-[110%] transition duration-500"
    @click="playShitSong"
  >
    <div class="relative h-full w-full">
      <IconPause
        v-if="isPlaying"
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] size-[50px] text-oldRose"
      />
      <IconPlay
        v-else
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] size-[50px] text-oldRose"
      />
    </div>

    <audio
      id="sht-song"
      controls
      class="hidden"
    >
      <source
        :src="OML"
        type="audio/mpeg"
      >
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

