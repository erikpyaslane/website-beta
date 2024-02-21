<template>
  <div class="intro p-0 m-0" ref="introSection">
    <div class="row m-0 align-items-end justify-content-around">
      <div class="col-md-6 justify-content-end align-self-center">
        <div class="col-md-12 p-2 rounded fade-in">
          <div class="fade-in">
            <h1 class="col-md-12 m-0">Hei! Ma olen</h1>
          </div>
        </div>
        <div class="col-md-12 p-2 rounded fade-in">
          <div class="col-md-12 fade-in">
            <h1 class="large">INNA SIDORUK</h1>
          </div>
        </div>
        <hr class="fade-in custom-hr" style="width: 50%; margin: 20px auto" />
        <QuoteComponent class="fade-in" />
        <div class="col-md-5 justify-content-end align-self-center">
          <router-link to="/contact" class="button-59 fade-in"
            >Võta ühendust ➔</router-link
          >
        </div>
      </div>
      <div class="col-md-5 align-items-end">
        <img class="fade-in" src="/images/inna.png" />
      </div>
      <!-- <div class="col-md-1 justify-content-end align-self-center"></div>-->
    </div>

    <!-- Add more content as needed -->
  </div>
</template>

<script>
import QuoteComponent from "./QuoteComponent.vue";

export default {
  components: {
    QuoteComponent,
  },
  mounted() {
    // Add event listener for scroll event
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    // Remove event listener when component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Calculate how far the user has scrolled
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      // Get the height of the IntroSection
      const introHeight = this.$refs.introSection.clientHeight;
      // Calculate the opacity based on the scroll position
      const opacity = 1 - scrollPosition / (introHeight * 0.8); // Adjust the divisor for desired speed

      // Apply the opacity to the IntroSection elements
      this.$refs.introSection.style.opacity = opacity;
    },
  },
};
</script>

<style scoped>
img {
  width: auto;
  height: 85vh;
}

.intro {
  background-color: transparent;
  width: 100%;
  height: 90vh;
  transition: opacity 0.5s ease;
}
.row {
  height: 90vh;
  /*
  background-image: url("/public/images/back.jpg");
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: white;
  */
}

h1 {
  text-align: center;
  font-size: 50px;
}

.large {
  text-align: center;
  font-size: 100px;
  font-family: "Snell Roundhand", cursive;
}

.custom-font {
  text-align: center;
  font-size: 70px;
  font-family: "Snell Roundhand", cursive;
}

.custom-hr {
  border: none;
  border-top: 2px solid #4e4e4e; /* Adjust the color as needed */
  height: 20px; /* Adjust the height as needed */
}

/* CSS */
.button-59 {
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-59:focus {
  color: #171e29;
}

.button-59:hover {
  border-color: rgb(87, 87, 87);
  color: rgb(87, 87, 87);
  fill: rgb(87, 87, 87);
}

.button-59:active {
  border-color: rgb(87, 87, 87);
  color: rgb(87, 87, 87);
  fill: rgb(87, 87, 87);
}

@media (min-width: 768px) {
  .button-59 {
    min-width: 170px;
  }
}

.fade-in {
  opacity: 0.3;
  animation: fadeIn 1s ease-in-out forwards;
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
