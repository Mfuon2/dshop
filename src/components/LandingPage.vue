<template>

  <NavBar />
  <hr class="hr hr-blurry" />
  <body-content></body-content>
  <hr class="hr hr-blurry" />
  <Footer />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBContainer } from 'mdb-vue-ui-kit'
import NavBar from '@/views/NavBar.vue'
import BodyContent from '@/views/BodyContent.vue'
import Footer from '@/views/Footer.vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
