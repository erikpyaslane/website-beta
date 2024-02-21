<template>
  <section class="bg">
    <NavigationBar />
  </section>
  <button v-if="showButton" @click="scrollToTop" class="scroll-top-btn"></button>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "OpenPage",
  data() {
    return {
      histories: [
        {
          id: "1",
          name: "Dog 1",
          modified_name: "dog1",
          description: "Tegeleb lohnadega",
          imageURL: "/images/dog1.jpg",
        },
        {
          id: "2",
          name: "Dog 2",
          modified_name: "dog2",
          description: "Tegeleb lohnadega",
          imageURL: "/images/dog2.jpg",
        },
        {
          id: "3",
          name: "Dog 3",
          modified_name: "dog3",
          description: "Tegeleb lohnadega",
          imageURL: "/images/dog3.jpg",
        },
        {
          id: "4",
          name: "Dog 4",
          modified_name: "dog4",
          description: "Tegeleb lohnadega",
          imageURL: "/images/dog4.jpg",
        },
        {
          id: "5",
          name: "Muusika",
          modified_name: "muusika",
          description: "Tegeleb muusikaga",
          imageURL: "/images/music.jpg",
        },
      ],
      showButton: false,
    };
  },
  components: {
    NavigationBar,
  },
  async created() {
    window.scrollTo(0, 0);
  },
  methods: {
    // Function to check if the button should be shown based on scrolling position
    checkScroll() {
      if (window.pageYOffset > 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    // Function to scroll to the top of the page
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    // Add event listener for scroll event
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    // Remove event listener when component is destroyed
    window.removeEventListener("scroll", this.checkScroll);
  },
  updateHistoryInView(index) {
    this.$set(this.histories, index, { ...this.histories[index], inView: true });
  },
};
</script>

<style scoped>
.bg {
  /*background-image: url("/public/images/back2.jpg");*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Set minimum height to 100% of the viewport height */
  width: 100%; /* Cover the entire width of the viewport */
  margin: 0; /* Remove any default margin */
  padding: 0;
  color: white
}

.scroll-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* display: none; */ /* Remove this line to ensure the button is initially visible */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}

.scroll-top-btn::before {
  content: "";
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-135deg);
}
</style>
