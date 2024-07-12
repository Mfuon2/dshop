<template>
  <NavBar />
  <hr  class="hr hr-blurry mt-5" />
  <body-content></body-content>
  <hr class="hr hr-blurry" />
  <Footer />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import NavBar from '@/views/NavBar.vue'
import BodyContent from '@/views/BodyContent.vue'
import Footer from '@/views/Footer.vue'

defineProps({
  msg: {}
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
