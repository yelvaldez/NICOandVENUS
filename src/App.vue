<script setup>
import HomeSlider from '@/components/HomeSlider.vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeInvitation from '@/components/HomeInvitation.vue'
import HomeGreetings from '@/components/HomeGreetings.vue'
import HomeEntourage from '@/components/HomeEntourage.vue'
import HomeDress from '@/components/HomeDress.vue'
import HomeVenue from '@/components/HomeVenue.vue'
import HomePrenup from '@/components/HomePrenup.vue'
import HomePlayer from '@/components/HomePlayer.vue'

import slideBackground2 from '@/assets/images/background2.jpg'
</script>

<template>
  <div class="relative">
    <HomePlayer />
    <HomeHero />
    <HomeInvitation />
    <HomeGreetings />

    <div>
      <img
        class="object-cover w-screen object-[13%_20%] sm:object-[0%_74%] h-screen"
        src="@/assets/images/collage8.jpg"
        alt=""
      >
    </div>
  </div>

  <HomeEntourage />
  <HomeSlider />
  <HomeDress />
  <HomeVenue />
  <HomePrenup />
  <div>
    <div
      class="w-full max-w-[1700px] mx-auto p-10 bg-cover mt-10"
      :style="{
        backgroundImage: `url(${slideBackground2})`
      }"
    >
      <div class="flex justify-center text-7xl sm:text-8xl caramel-regular">
        RSVP
      </div>
      <iframe
        class="mx-auto opacity-80"
        src="https://docs.google.com/forms/d/e/1FAIpQLScS5o8GnKVCWJIQdZ-_yTGRDLFA01yneswa8vkAAUW_deV40A/viewform?embedded=true"
        width="100%"
        height="1250"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading…</iframe>
      <!-- <div
        class="namdhinggo-regular text-[18px] mx-auto text-center max-w-[50ch]"
      >
        We are excited to celebrate our wedding with our closest families and friends!
      </div>
      <div class="namdhinggo-regular text-[18px] mx-auto text-center max-w-[22ch] p-5">
        Please contact us:
        Fb: Venus/Nico
      </div>
      <div class="namdhinggo-regular text-[18px] mx-auto text-center max-w-[50ch]">
        The favor of a response is requested before July 7, 2025. Thank you!
      </div>
      <div class="grid grid-cols-2 max-w-3xl mx-auto gap-5 p-8">
        <div class="text-left col-span-2 namdhinggo-regular text-[18px]">
          <label
            class="block"
            for="fname"
          >
            Name
          </label>

          <input
            id="text"
            class="rounded-sm w-full py-2 px-3 opacity-75"
            type="fname"
            name="fname"
          >
        </div>
        <div>
          <label
            class="block namdhinggo-regular text-[18px] "
            for="phone"
          >Phone</label>

          <input
            id="number"
            class="rounded-sm w-full py-2 px-3 opacity-75"
            type="phone"
            name="phone"
          >
        </div>
        <div>
          <label
            for="phone"
            class="block namdhinggo-regular text-[18px] "
          >Email</label>
          <input
            id="email"
            class="rounded-sm w-full py-2 px-3 opacity-75"
            type="phone"
            name="phone"
          >
        </div>
        <div class="col-span-2">
          <label
            class="block namdhinggo-regular text-[18px] "
            for="message"
          >Message</label>
          <textarea
            id="text"
            class="rounded-sm w-full opacity-75"
            type="message"
            name="message"
            rows="5"
          />
        </div>
        <div class="flex flex-col namdhinggo-regular text-[18px] col-span-2">
          <label
            id="1865915258"
            for="40914"
            class="for-checkable flex gap-2"
          >
            <input
              id="40914"
              type="radio"
              value="Yes, I'll be there."
              name="dmform-4"
              class="checkable-input"
            >
            <span id="21686">Yes, I'll be there.</span>
          </label>
          <label
            id="1865915258"
            for="40914"
            class="for-checkable flex gap-2"
          >
            <input
              id="40914"
              type="radio"
              value="Yes, I'll be there."
              name="dmform-4"
              class="checkable-input"
            >
            <span id="21686">Sorry, I won't be able to make it.</span>
          </label>
        </div>
        <div class="text-center col-span-2 ">
          <button class="bg-[#cf5c54]/85 hover:bg-[#cf5c54] transition duration-500 text-white font-bold py-2 px-12 rounded">
            SUBMIT
          </button>
        </div>
      </div> -->
    </div>
    <img
      class="object-contain object-[0%_30%] w-[400px] mx-auto p-8"
      src="@/assets/images/logo.jpg"
      alt=""
    >
    <div class="text-center namdhinggo-bold text-4xl">
      NICO & VENUS
    </div>
    <div class="text-center namdhinggo-regular text-4xl">
      07. 29. 25
    </div>
    <div class="text-center namdhinggo-regular text-[11px] mt-10 mb-5">
      © 2025 - MarielleMaeValdez
    </div>
  </div>
</template>



<style scoped>

</style>