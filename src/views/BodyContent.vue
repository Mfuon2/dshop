<template>
  <div class="bg-light">
    <MDBContainer class="mt-2">
      <!-- Jumbotron -->
      <div class="p-5 text-center">
        <h1 class="mb-3">Welcome to ∂Shop Mall</h1>
        <h4 class="mb-3">Subheading</h4>
      </div>
      <!-- Jumbotron -->
    </MDBContainer>
      <MDBRow class="row">
        <MDBCol md="8">
          <MDBCard class="w-responsive m-auto">
            <MDBCardHeader>Shops Ne</MDBCardHeader>
            <MDBCardBody>
              <MDBContainer class="mt-2">
                <swiper
                  ref="{swiperRef}"
                  @autoplayTimeLeft="onAutoplayTimeLeft"
                  :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
                  :pagination="pagination"
                  :slidesPerView="1"
                  :centeredSlides="false"
                  :spaceBetween="30"
                  :navigation="true"
                  :modules="modules"
                >
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Furaha business</MDBCardTitle>
                        <MDBCardText>
                          This is my shop
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <template #container-end>
                    <div class="autoplay-progress">
                      <svg viewBox="0 0 48 48" ref="progressCircle">
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref="progressContent"></span>
                    </div>
                  </template>
                </swiper>
              </MDBContainer>
            </MDBCardBody>
          </MDBCard>
          <hr  class="hr hr-blurry m-5" />
          <MDBCard class="w-responsive m-auto">
            <MDBCardHeader>Shops Ne</MDBCardHeader>
            <MDBCardBody>
              <MDBContainer class="mt-2">
                <swiper
                  ref="{swiperRef}"
                  @autoplayTimeLeft="onAutoplayTimeLeft"
                  :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
                  :pagination="pagination"
                  :slidesPerView="1"
                  :centeredSlides="false"
                  :spaceBetween="30"
                  :navigation="true"
                  :modules="modules"
                >
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Furaha business</MDBCardTitle>
                        <MDBCardText>
                          This is my shop
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <swiper-slide>
                    <MDBCard class="mb-3">
                      <MDBCardImg alt="..." src="https://mdbootstrap.com/img/new/slides/041.webp" top />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional
                          content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </swiper-slide>
                  <template #container-end>
                    <div class="autoplay-progress">
                      <svg viewBox="0 0 48 48" ref="progressCircle">
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref="progressContent"></span>
                    </div>
                  </template>
                </swiper>
              </MDBContainer>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">Chat Screen</MDBCol>
      </MDBRow>



  </div>


</template>

<script lang="ts" setup>
import {
  MDBCard,
  MDBCardImg,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBContainer,
  MDBCardHeader,
  MDBCol,
  MDBRow
} from 'mdb-vue-ui-kit'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../style.css'
import { ref } from 'vue'

const modules = ref([Navigation, Pagination, Autoplay])
const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};
const pagination = ref( {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
})

</script>
