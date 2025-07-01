<script setup lang>

import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
</script>

<template>
  <Splide
    :options="{ rewind: true, autoplay: true, interval: 2000, pauseOnHover: true, arrows:false, type:'loop'}"
    aria-label="My Favorite Images"
  >
    <SplideSlide>
      <img
        src="@/assets/images/slide1.jpg"
        alt="Sample 1"
        class="h-[800px] object-cover w-screen bg-top"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="@/assets/images/slide2.jpg"
        alt="Sample 2"
        class="object-cover h-[800px] object-[67%_65%] sm:object-cover w-screen"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="@/assets/images/slide3.jpg"
        alt="Sample 2"
        class="h-[800px] object-cover w-screen"
      >
    </SplideSlide>
  </Splide>
</template>

