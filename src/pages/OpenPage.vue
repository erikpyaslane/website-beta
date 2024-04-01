<template>
  <div v-if="isLoaded" class="s-page">

    <section class="bg">
      <NavigationBar />
      <IntroSection/>
    </section>
    <Transition appear>
      <section class="s2" style="height: 100vh; background-color: white">
        <div class="row w-100 pt-5 pb-5 p-0 fade-in">
          <h1>
            Projektid
            <span class="text">
              <router-link to="/projects" class="button-59 fade-in"
                >Vaata lähemalt ➔
              </router-link>
            </span>
          </h1>
        </div>

        <SlidesComponent v-if="projects.length > 0" :projects="projects" />
      </section>
    </Transition>

    <section class="s3">
      <div class="pb-2 pt-5">
        <h1>Ajalugu</h1>
      </div>
      <TimeLine :histories="histories" @itemInView="updateHistoryInView" />
    </section>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import IntroSection from "@/components/IntroSection.vue";
import SlidesComponent from "../components/SlidesComponent";
import TimeLine from "@/components/TimeLine.vue";

export default {
  name: "OpenPage",
  data() {
    return {
      projects: [
        {
          id: "1",
          name: "Dog 1",
          modified_name: "dog1",
          description: "Tegeleb lohnadega",
          imageURL: "/images/dog1.jpg",
        },
        {
          id: "2",
          name: "Raagime",
          modified_name: "raagime",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar massa vel commodo accumsan. Donec hendrerit ante quis arcu rutrum fermentum. Proin posuere lorem ante, eget gravida lorem ullamcorper sit amet. Integer lectus enim, molestie vel eros sed, porttitor molestie urna. Cras id blandit ex, ut consectetur nisi. Maecenas sed fermentum arcu. Duis sed auctor diam. In vitae convallis lorem. Suspendisse ullamcorper arcu vel mi euismod, nec tempus diam dignissim.",
          imageURL: "/images/raagime.jpg",
        },
        {
          id: "3",
          name: "Tartu Ulikool",
          modified_name: "ut",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar massa vel commodo accumsan. Donec hendrerit ante quis arcu rutrum fermentum. Proin posuere lorem ante, eget gravida lorem ullamcorper sit amet. Integer lectus enim, molestie vel eros sed, porttitor molestie urna. Cras id blandit ex, ut consectetur nisi. Maecenas sed fermentum arcu. Duis sed auctor diam. In vitae convallis lorem. Suspendisse ullamcorper arcu vel mi euismod, nec tempus diam dignissim.",
          imageURL: "/images/tartukool.jpg",
        },
        {
          id: "4",
          name: "Dog 4",
          modified_name: "dog4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar massa vel commodo accumsan. Donec hendrerit ante quis arcu rutrum fermentum. Proin posuere lorem ante, eget gravida lorem ullamcorper sit amet. Integer lectus enim, molestie vel eros sed, porttitor molestie urna. Cras id blandit ex, ut consectetur nisi. Maecenas sed fermentum arcu. Duis sed auctor diam. In vitae convallis lorem. Suspendisse ullamcorper arcu vel mi euismod, nec tempus diam dignissim.",
          imageURL: "/images/dog1.jpg",
        },
        {
          id: "5",
          name: "Muusika",
          modified_name: "muusika",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar massa vel commodo accumsan. Donec hendrerit ante quis arcu rutrum fermentum. Proin posuere lorem ante, eget gravida lorem ullamcorper sit amet. Integer lectus enim, molestie vel eros sed, porttitor molestie urna. Cras id blandit ex, ut consectetur nisi. Maecenas sed fermentum arcu. Duis sed auctor diam. In vitae convallis lorem. Suspendisse ullamcorper arcu vel mi euismod, nec tempus diam dignissim.",
          
          imageURL: "/images/music.jpg",
        },
      ],
      histories: [
        {
            text: "Quisque sit amet sem at quam posuere sollicitudin. Etiam malesuada leo sed orci pellentesque, sed suscipit orci vehicula. Curabitur congue tristique lacus hendrerit accumsan.", 
            imageURL: "/images/tartukool.jpg",
        },{
            text: "Quisque sit amet sem at quam posuere sollicitudin. Etiam malesuada leo sed orci pellentesque, sed suscipit orci vehicula. Curabitur congue tristique lacus hendrerit accumsan.", 
            imageURL: "/images/tartukool.jpg",
        },{
            text: "Quisque sit amet sem at quam posuere sollicitudin. Etiam malesuada leo sed orci pellentesque, sed suscipit orci vehicula. Curabitur congue tristique lacus hendrerit accumsan.", 
            imageURL: "/images/tartukool.jpg",
        },{
            text: "Quisque sit amet sem at quam posuere sollicitudin. Etiam malesuada leo sed orci pellentesque, sed suscipit orci vehicula. Curabitur congue tristique lacus hendrerit accumsan.", 
            imageURL: "/images/tartukool.jpg",
        },{
            text: "Quisque sit amet sem at quam posuere sollicitudin. Etiam malesuada leo sed orci pellentesque, sed suscipit orci vehicula. Curabitur congue tristique lacus hendrerit accumsan.", 
            imageURL: "/images/tartukool.jpg",
        }
      ],
      showButton: false,
    };
  },
  components: {
    NavigationBar,
    IntroSection,
    SlidesComponent,
    TimeLine,
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
  background-image: url("/public/images/back3-min.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Set minimum height to 100% of the viewport height */
  width: 100%; /* Cover the entire width of the viewport */
  margin: 0; /* Remove any default margin */
  padding: 0;
  color: white;
}

.s3 {
  background-color: #ebc898;
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

h1 {
  text-align: center;
  font-size: 50px;
  font-family: "Snell Roundhand", cursive;
}

.text {
  font-size: 30px;
  font-family: "Snell Roundhand", cursive;
}
</style>
