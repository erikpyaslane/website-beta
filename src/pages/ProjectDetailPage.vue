<template>
  <div v-if="project">
    <NavigationBar />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/projects" class="breadcrumb-link">Projects</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ project.name }}
        </li>
      </ol>
    </nav>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center">
          <div class="img-wrap">
            <img :src="project.imageURL" class="img-fluid" alt="Project Image" />
          </div>
        </div>
        <div class="col-md-6 text-center">
          <div class="project-details">
            <h1>{{ project.name }}</h1>
            <h3>{{ project.description }}</h3>
            <button>Külasta veebilehe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "ProjectDetailPage",
  data() {
    return {
      project: {},
    };
  },
  components: {
    NavigationBar,
  },
};
</script>

<style scoped>
.breadcrumb-link {
  text-decoration: none; /* Remove the underline */
  color: #333; /* Set the default color */
}
/* Custom hover effect for breadcrumb links */
.breadcrumb-link:hover {
  color: #007bff; /* Change the color on hover as needed */
}
</style>
