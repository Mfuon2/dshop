<template>
  <div class="bg-light">
    <div class="mx-2 my-2 ">
      <MDBContainer class="mt-2">
        <!-- Jumbotron -->
        <div class="p-3 text-center">
          <h1 class="mb-5">Welcome to ∂Shop Mall</h1>
          <h5 class="text-muted mb-2  text-center">
            You are visiting us around {{location}}. We will help you find favorite and nice shops and stalls around you!
          </h5>
        </div>
        <!-- Jumbotron -->
      </MDBContainer>
      <MDBRow class="row">
        <MDBCol>
          <MDBCard class="w-responsive m-auto">
            <h4 class="m-5">Featured shops near you</h4>
            <MDBCardBody>
              <MDBContainer>
                <swiper
                  ref="{swiperRef}"
                  :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
                  :centeredSlides="false"
                  :modules="modules"
                  :navigation="true"
                  :pagination="pagination"
                  :slidesPerView="1"
                  :spaceBetween="30"
                  @autoplayTimeLeft="onAutoplayTimeLeft"
                >
                  <swiper-slide v-for="(item, index) in slidesContent " :key="index">
                    <ShopsCardComponent :body=item.body
                                        :group-description="item.groupDescription"
                                        :category="item.category"
                                        :group-rating="item.groupRating"
                                        :img="item.img"
                                        :group-opening-time="item.groupOpeningTime"
                                        :title="item.title" />
                  </swiper-slide>
                  <template #container-end>
                    <div class="autoplay-progress">
                      <svg ref="progressCircle" viewBox="0 0 48 48">
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
      </MDBRow>
      <hr class="hr hr-blurry" />
      <MDBRow class="row">
        <MDBCol>
          <MDBCard class="w-responsive m-auto">
            <h4 class="m-5">All shops near you</h4>
            <MDBCardBody>
              <MDBContainer class="mt-2">
                <swiper
                  ref="{swiperRef}"
                  :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
                  :centeredSlides="false"
                  :modules="modules"
                  :navigation="true"
                  :pagination="pagination"
                  :slidesPerView="1"
                  :spaceBetween="30"
                  @autoplayTimeLeft="onAutoplayTimeLeft"
                >
                  <swiper-slide v-for="(item, index) in slidesContent " :key="index">
                    <ShopsCardComponent :body=item.body
                                        :group-description="item.groupDescription"
                                        :category="item.category"
                                        :group-rating="item.groupRating"
                                        :img="item.img"
                                        :group-opening-time="item.groupOpeningTime"
                                        :title="item.title" />
                  </swiper-slide>
<!--                  <template #container-end>-->
<!--                    <div class="autoplay-progress">-->
<!--                      <svg ref="progressCircle" viewBox="0 0 48 48">-->
<!--                        <circle cx="24" cy="24" r="20"></circle>-->
<!--                      </svg>-->
<!--                      <span ref="progressContent"></span>-->
<!--                    </div>-->
<!--                  </template>-->
                </swiper>
              </MDBContainer>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>

  </div>


</template>

<script lang="ts" setup>
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-vue-ui-kit'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../style.css'
import { onBeforeMount, onMounted, ref } from 'vue'
import ShopsCardComponent from '@/components/ShopsCardComponent.vue'
import initLocation from '@/service/location_loader'


const modules = ref([Navigation, Pagination, Autoplay])
const progressCircle = ref()
const progressContent = ref()
const onAutoplayTimeLeft = function(s: any, time: any, progress: any) {
  progressCircle.value.style.setProperty('--progress', 1 - progress)
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`
}
const pagination = ref({
  clickable: true,
  renderBullet: (index: any, className: any) => {
    return '<span class="' + className + '">' + (index + 1) + '</span>'
  }
})
const slidesContent = ref([
  {
    title: 'Title 1',
    groupRating: '****',
    category: 'Supermarket',
    groupDescription: 'desc 1',
    groupOpeningTime: 'Open',
    body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    img: 'https://mdbootstrap.com/img/new/slides/041.webp'
  },
  {
    title: 'Title 2',
    groupRating: '****',
    category: 'General Mini Mart',
    groupDescription: 'desc 2',
    groupOpeningTime: 'Open',
    body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    img: 'https://mdbootstrap.com/img/new/slides/041.webp'
  },
  {
    title: 'Title 3',
    groupRating: '****',
    category: 'Electronics and cables',
    groupDescription: 'desc 3',
    groupOpeningTime: 'Open',
    body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    img: 'https://mdbootstrap.com/img/new/slides/041.webp'
  },
  {
    title: 'Title 4',
    category: 'Children Clothes',
    groupRating: '****',
    groupDescription: 'desc 4',
    groupOpeningTime: 'Open',
    body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    img: 'https://mdbootstrap.com/img/new/slides/041.webp'
  },
  {
    title: 'Title 5',
    groupRating: '****',
    category: 'Hardware',
    groupDescription: 'desc 5',
    groupOpeningTime: 'Open',
    body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    img: 'https://mdbootstrap.com/img/new/slides/041.webp'
  }
])
let location =  ref()
onBeforeMount(() => {
  initLocation()
   location.value = localStorage.getItem('location')
})

</script>
