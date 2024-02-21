<template>
  <div class="carousel-container">
    <Carousel
      :itemsToShow="calculateItemsToShow()"
      :wrapAround="true"
      :transition="300"
      :autoplay="4000"
      :v-model:currentIndex="currentProject"
      class="py-2 my-5"
    >
      <template #addons>
        <Navigation style="background-color: rgba(255, 255, 255)" />
        <Pagination
          style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%)"
        />
      </template>
      <Slide v-for="(project, index) in projects" :key="index">
        <div class="carousel__item rounded">
          <div class="image-container pb-5 hover11" @click="redirectToPage(project)">
            <div class="text-overlay">
              <h3>{{ project.name }}</h3>
            </div>
            <figure>
              <img class="carousel-image rounded" :src="project.imageURL" />
            </figure>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentProject: 0,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    calculateItemsToShow() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        return 1;
      } else if (screenWidth < 1200) {
        return 2;
      } else {
        return 3;
      }
    },
    redirectToPage(project) {
      console.log("Redirecting to:", project.modified_name);
      // Optionally, use the router programmatically
      window.location.href = `/projects/${project.modified_name}`;
    },
  },
};
</script>

<style scoped>
.carousel-section {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 15px;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 1;
  transform: scale(1);
}

.carousel-image {
  width: 100%;
  height: auto;
  filter: blur(0); /* Initial blur level */
  transition: filter 0.3s ease-in-out;
}

.image-container {
  position: relative;
}

.project-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff; /* Adjust the color based on your design */
  display: none;
}

figure {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
}
figure:hover + span {
  bottom: -36px;
  opacity: 1;
}

.hover11 figure img {
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover11 figure:hover img {
  opacity: 0.5;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

button.carousel__next {
  color: #e9e9e9;
}

.carousel-pagination {
  /* Add styles for Pagination component */
  display: flex;
  gap: 10px;
}

.carousel-navigation {
  /* Add styles for Navigation component */
  display: flex;
  gap: 10px;
}

.text-overlay {
  position: inline-block;
  bottom: 0; /* Position at the bottom of the container */
  left: 0;
  width: 100%; /* Take the full width of the container */
  background: #fff; /* Semi-transparent background */
  text-align: center;
  padding: 10px; /* Adjust the padding as needed */
  color: black; /* Text color */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
}

.image-container:hover .text-overlay {
  opacity: 1; /* Show on hover */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
