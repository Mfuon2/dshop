<template>
  <!-- Footer -->
  <MDBFooter :text="['center', 'lg-start', 'muted']">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-secondary"
            iconStyle="fab"
            icon="facebook-f"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-secondary"
            iconStyle="fab"
            icon="twitter"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-secondary"
            iconStyle="fab"
            icon="google"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-secondary"
            iconStyle="fab"
            icon="instagram"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-secondary"
            iconStyle="fab"
            icon="linkedin"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-secondary"
            iconStyle="fab"
            icon="github"
          ></MDBIcon>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <MDBContainer class="text-center text-md-start mt-5">
        <!-- Grid row -->
        <MDBRow class="mt-3">
          <!-- Grid column -->
          <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 link-secondary"></i>∂Shop
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </MDBCol>
          <!-- Grid column -->

          <!-- Grid column -->
          <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" class="text-reset">Angular</a>
            </p>
          </MDBCol>
          <!-- Grid column -->

          <!-- Grid column -->
          <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
          </MDBCol>
          <!-- Grid column -->

          <!-- Grid column -->
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i class="fas fa-home me-3 link-secondary"></i> New York,
              NY 10012, US
            </p>
          </MDBCol>
          <!-- Grid column -->
        </MDBRow>
        <!-- Grid row -->
      </MDBContainer>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
      class="text-center p-4"
      style="background-color: rgba(0, 0, 0, 0.05)"
    >
      &copy; {{new Date().getFullYear()}} Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
      >∂Shop.com</a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>

<script setup lang="ts">
import { MDBFooter, MDBIcon, MDBRow, MDBCol, MDBContainer } from "mdb-vue-ui-kit";
</script>
