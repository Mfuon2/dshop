<template>
  <MDBNavbar expand="lg" position="top" light bg="light" container>
    <MDBNavbarToggler
      target="#navbarTogglerDemo01"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <MDBNavbarBrand link href="#">
      ∂Shop
    </MDBNavbarBrand>
    <MDBCollapse id="navbarTogglerDemo01" v-model="collapse6">
      <MDBNavbarNav >
        <MDBNavbarItem to="#"> Home </MDBNavbarItem>
        <MDBNavbarItem href="#"> About Us </MDBNavbarItem>
        <MDBNavbarItem
          link
          to="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Contact Us
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
    <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row" v-if="collapse6">
      <MDBNavbarItem
        to="#"
        class="me-3 me-lg-0"
        linkClass="link-secondary"
      ><MDBIcon icon="shopping-cart"></MDBIcon
      ></MDBNavbarItem>
      <MDBNavbarItem
        to="#"
        class="me-3 me-lg-0"
        linkClass="link-secondary"
      >
        <MDBIcon icon="bell" />
        <MDBBadge notification color="danger" pill>1</MDBBadge>
      </MDBNavbarItem>
      <MDBNavbarItem href="#" class="me-3 me-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
          class="rounded-circle"
          height="22"
          alt=""
          loading="lazy"
        />
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>
</template>

<script setup lang="ts">
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBCollapse,
  MDBNavbarNav, MDBBadge, MDBIcon
} from 'mdb-vue-ui-kit'
import { ref } from 'vue';

const collapse6 = ref(false);
</script>
