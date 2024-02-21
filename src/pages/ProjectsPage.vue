<template>
  <section>
    <NavigationBar />
    <div class="center-container">
      <CarouselComponent class="w-100 fade-in" :projects="projects" />
    </div>
  </section>
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "ProjectsPage",
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
      showSlides: false,
      isLoading: true,
    };
  },
  components: {
    CarouselComponent,
    NavigationBar,
  },
  async created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  height: auto;
  padding-bottom: 40px;
  margin-bottom: 0px;
  background-color: white;
  width: 100%;
}

.fade-in {
  opacity: 0;
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
