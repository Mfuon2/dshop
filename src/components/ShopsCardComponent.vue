<template>
  <MDBCard class="mb-3">
    <MDBCardImg alt="..." :src="props.img" top />
    <MDBCardBody>
      <MDBCardText>
        <div class="d-flex flex-column align-items-start mx-5">
          <p class="fw-bold mb-1">{{props.title}}</p>
          <MDBBadge badge="warning" class="text-dark">{{props.category}}</MDBBadge>
          <p class="text-muted mb-1 text-start">
            {{props.body}}
          </p>
          <p class="text-muted mb-1 text-start">
            {{props.groupDescription}}
          </p>
          <small><a target="_blank" href="">Visit Shop</a></small>
          <small>{{props.groupRating}}</small>
          <small>{{props.groupOpeningTime}}</small>
        </div>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>
<script setup lang="ts">
import {
  MDBCard,
  MDBContainer,
  MDBCardBody,
  MDBCardImg,
  MDBCardText,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,MDBBadge
} from 'mdb-vue-ui-kit'

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  groupDescription:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true
  },
  groupRating:{
    type: String,
    required: true,
  },
  groupOpeningTime:{
    type: String
  }

})
</script>
