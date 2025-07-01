<script setup lang>
import {ref} from 'vue'
import dayjs from 'dayjs'
const weddingDate = dayjs('2025-07-29')


const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

setInterval(() => {
  const currentDate = dayjs()

  days.value = weddingDate.diff(currentDate, 'days')
  hours.value = weddingDate.subtract(days.value, 'days').diff(currentDate, 'hours')
  minutes.value = weddingDate.subtract(days.value, 'days').subtract(hours.value, 'hours').diff(currentDate, 'minutes')
  seconds.value = weddingDate.subtract(days.value, 'days').subtract(hours.value, 'hours').subtract(minutes.value, 'minutes').diff(currentDate, 'seconds')
}, 1000);

</script>

<template>
  <div class="flex gap-2 sm:gap-5 justify-center pb-10 opacity-80">
    <div class="flex flex-col text-center bg-white border border-solid border-slate-100 size-[80px] sm:size-[100px] justify-center items-center rounded-xl">
      <span class="text-5xl">{{ String(days).padStart(2, '0') }}</span>
      <span class="text-slate-500 text-xs italic">Days</span>
    </div>

    <div class="flex flex-col text-center bg-white border border-solid border-slate-100 size-[80px] sm:size-[100px] justify-center items-center rounded-xl">
      <span class="text-5xl">{{ String(hours).padStart(2, '0') }}</span>
      <span class="text-slate-500 text-xs italic">Hours</span>
    </div>

    <div class="flex flex-col text-center bg-white border border-solid border-slate-100 size-[80px] sm:size-[100px] justify-center items-center rounded-xl">
      <span class="text-5xl">{{ String(minutes).padStart(2, '0') }}</span>
      <span class="text-slate-500 text-xs italic">Minutes</span>
    </div>

    <div class="flex flex-col text-center bg-white border border-solid border-slate-100 size-[80px] sm:size-[100px] justify-center items-center rounded-xl">
      <span class="text-5xl">{{ String(seconds).padStart(2, '0') }}</span>
      <span class="text-slate-500 text-xs italic">Seconds</span>
    </div>
  </div>
</template>

