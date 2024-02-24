<template>
  <div
    v-if="project"
    class="s-page"
    :style="{ backgroundImage: 'url(' + project.imageURL + ')' }"
  >
    <NavigationBar style="background-color: white;" />

    <section v-if="projectLoaded">
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-12 align-self-start">
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
        </div>
        <div class="col-md-12 align-self-center pb-5">
          <h1>{{ project.name }}</h1>
        </div>
        <div class="col-md-5 text-center">
          <div class="img-wrap">
            <img :src="project.imageURL" class="img-fluid" alt="Project Image" />
          </div>
        </div>
        <div class="col-md-5 text-center">
          <div class="project-details">
            <h3>{{ project.description }}</h3>
          </div>
        </div>
        <div class="col-sm-12 align-self-center mt-5 pt-5">
          <button style="width: 25%; height: 50px">Külasta veebilehe</button>
        </div>
      </div>
    </section>
    <section v-if="projectLoaded">
      <div class="row align-items-center justify-content-center">
        <NewsList :projectID="project._id" />
      </div>
    </section>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { projects } from "../temp-data";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "ProjectDetailPage",
  data() {
    return {
      project: {},
      projectLoaded: false,
      projectID: null,
    };
  },
  components: {
    NavigationBar,
  },
  async created() {
    const projectName = this.$route.params.projectModifiedName;
    console.log(projectName)

    // Find the project with the matching name
    this.project = projects.find((project) => project.modified_name === projectName);

    // If project found, set projectLoaded to true
    if (this.project) {
      this.projectLoaded = true;
    }
  },
};
</script>

<style scoped>
.s-page {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.row {
  margin-top: 40vh;
  background-color: white;
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0px -14px 51px 21px rgba(141, 141, 141, 0.45),
    0px 25px 20px -20px rgba(0, 0, 0, 0.45);
}
.breadcrumb-link {
  text-decoration: none; /* Remove the underline */
  color: #333; /* Set the default color */
}
/* Custom hover effect for breadcrumb links */
.breadcrumb-link:hover {
  color: #007bff; /* Change the color on hover as needed */
}

.img-fluid {
  border-radius: 10px;
}

.project-details {
  text-align: initial;
}
h1 {
  font-size: 60px;
}
</style>
