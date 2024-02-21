<template>
  <div class="slide" 
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @click="redirectToPage">
    <div class="image-container hover07 hover11">
      <figure class="figure">
        <img 
      class="mx-auto d-block" 
      style="width: 100%; height: auto; object-fit: cover;" 
      :src="imageURL" alt="Slide Image"
      loading="lazy">
      </figure>
      <span class="caption d-none d-md-block"  :style="{ bottom: `${captionBottom}px`, transition: 'bottom 0.8s ease' }">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
    </span>
    </div>
    
    
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String, // Add a prop to specify the link
      required: true,
    },
    onDragStart: {
      type: Function,
      required: true,
    },
    onDrag: {
      type: Function,
      required: true,
    },
    onDragEnd: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      // ... your existing data
      captionBottom: 10,
    };
  },
  methods: {
    startDrag(event) {
      this.onDragStart(event);
    },
    drag(event) {
      this.onDrag(event);
    },
    endDrag() {
      this.onDragEnd();
    },
    redirectToPage() {
      const url = this.link;
      
      // Redirect to the generated URL
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.slide {
  position: relative;
  width: 98%;
  margin: 0;
  margin-left: 1%;
  margin-right: 1%;
}

.image-container {
  align-items: center;
  position: relative;
  width: 100%;
}

.figure {
  margin-bottom: 0%;
  align-items: center;
}

.caption {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  color: #fff;
  padding: 10px;
  text-align: center;
}

/* Blur
.hover07 figure img {
	-webkit-filter: blur(3px);
	filter: blur(3px);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover07 figure:hover img {
	-webkit-filter: blur(0);
	filter: blur(0);
}
*/
/* Opacity #1 */
.hover11 figure img {
	opacity: 1;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover11 figure:hover img {
	opacity: .5;
}

.image-container:hover figure img {
  opacity: .5;
  transform: scale(1.01);
  width: 100%;
  height: auto;
}

.image-container .caption {
  transform: translateY(0);
  transition: transform 0.8s ease; /* Add smooth transition effect */
}

.image-container:hover .caption {
  transform: translateY(-30%);
}

.image-container:hover .caption {
  bottom: 30%; /* Move the caption to the center when hovering */
}

img {
  border-radius: 40px;
  display: block;
  margin: 0 auto; /* Center the image */
  width: 100%;
  height: auto;
}

.description {
  margin-top: 5px; /* Add margin to separate the description from the label */
}

</style>