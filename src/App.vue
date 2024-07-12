<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LandingPage from '@/components/LandingPage.vue'


interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface GeolocationError {
  message: string;
}

const position = ref<GeolocationPosition | null>(null);
const error = ref<string | null>(null);

const handlePosition = (pos: GeolocationPosition) => {
  position.value = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };
};

const handleError = (err: GeolocationError) => {
  error.value = err.message;
};

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handlePosition, handleError);
  } else {
    error.value = "Geolocation is not supported by this browser.";
  }
})

</script>

<template>
  <LandingPage/>
</template>

<style>
#app {
  font-family: 'Avenir', sans-serif;
}
</style>
