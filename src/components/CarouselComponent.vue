<template>
  <div class="mt-2 mb-2 px-2 container w-100 flex-column justify-content-center align-items-center">
    <Carousel
      v-model="currentProject"
      :itemsToShow="calculateItemsToShow()"
      :wrapAround="true"
      :transition="1000"
      :autoplay="4000"
      class="py-2 w-75 align-self-center"
      @change="handleSlideChange"
    >
      <Slide
        v-for="(project, index) in projects"
        :key="index"
        :class="{
          'carousel__slide--active': index === currentProject,
        }"
      >
        <div class="carousel__item rounded">
          <img class="carousel-image rounded" :src="project.imageURL" />
        </div>
        <div class="text-overlay">
          <h3>{{ project.name }}</h3>
        </div>
      </Slide>

      <template #addons>
        <Navigation style="background-color: white; padding: 5px;" />
      </template>
    </Carousel>

    <div class="triangle"></div>

    <div
      class="info-area-container w-100 align-items-center smooth-transition mb-2"
      v-if="displayedProject"
    >
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
          <img class="project-image fade-in" :src="displayedProject.imageURL" />
        </div>

        <div class="col-md-6 justify-content-around fade-in">
          <h1 class="fade-in">{{ displayedProject.name }}</h1>
          <p class="fade-in">{{ displayedProject.description }}</p>
          <div class="flex-d row align-self-end align-items-end justify-content-center">
            <div class="col-md-4 fade-in">
              <!-- Use router-link to navigate to the project details route -->
              <router-link :to="'/projects/' + displayedProject.modified_name">
                <button>Vaata lähemalt</button>
              </router-link>
            </div>
            <div class="col-md-4 fade-in">
              <a :href="formattedWebsiteURL" target="_blank" v-if="displayedProject.websiteURL">
                <button>Külasta veebilehte</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
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
    Navigation,
  },
  computed: {
    displayedProject() {
      return this.projects[this.currentProject];
    },
    formattedWebsiteURL() {
      if (this.displayedProject && this.displayedProject.websiteURL) {
        const url = this.displayedProject.websiteURL;
        if (url.startsWith("http://") || url.startsWith("https://")) {
          return url;
        } else {
          return "http://" + url;
        }
      }
      return "";
    },
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
    handleSlideChange(index) {
      this.currentProject = index;
    },
  },
};
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__track {
  display: flex; /* Ensure the track is displayed as a flex container */
  transition: transform 0.5s ease; /* Apply a smooth transition to the transform property */
  cursor: grab; /* Set the cursor to indicate grabbing */
}

.carousel__track:active {
  cursor: grabbing; /* Change the cursor appearance when actively dragging */
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide.active {
  transform: rotateY(0) scale(1);
  position: relative;
}

.carousel__slide--active::after {
  content: "";
  position: absolute;
  top: 100%; /* Adjust the distance of the triangle from the image */
  left: 50%;
  margin-left: -20px; /* Adjust this value based on the triangle size */
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent rgb(238, 238, 238) transparent; /* Change the color as needed */
}

.carousel__slide--active {
  transform: rotateY(0) scale(1);
  position: relative;
  border: 5px solid;
  border-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Change colors as needed */
  border-image-slice: 1;
}


.carousel__slide--prev,
.carousel__slide--next {
  opacity: 1;
  transform: rotateY(0) scale(0.9);
}

.carousel__slide--prev {
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--next {
  transform: rotateY(20deg) scale(0.9);
}

.carousel-image {
  width: 100%;
  height: auto;
}

.info-area-container {
  background-color: rgb(238, 238, 238);
  width: 100%;
  text-align: center;
  margin: 00px auto;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.5s ease;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid rgb(238, 238, 238); /* Change the color as needed */
  margin: 0 auto;
  transform: rotate(180deg);
}
.project-image {
  width: 90%;
  height: auto;
  margin: 0px;
  border-radius: 30px;
  transition: transform 0.3s ease;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.info-fade-enter-active,
.info-fade-leave-active {
  transition: opacity 0.5s ease; /* Add a smooth transition for opacity */
}
.info-fade-enter,
.info-fade-leave-to {
  opacity: 0;
}

.text-overlay {
  position: absolute;
  bottom: 0; /* Position at the bottom of the container */
  left: 0;
  width: 100%; /* Take the full width of the container */
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  text-align: center;
  padding: 10px; /* Adjust the padding as needed */
  color: #fff; /* Text color */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
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

<style>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 1s;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.fade-in-info-enter-active,
.fade-in-info-leave-active {
  transition: opacity 1s;
}
.fade-in-info-enter,
.fade-in-info-leave-to {
  opacity: 0;
}
</style>
