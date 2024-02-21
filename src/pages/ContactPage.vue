<template>
  <div>
    <NavigationBar />
    <div class="contact-form-container row fade-in">
      <div class="col-md-6">
        <h1>Kontakt</h1>
        <p>Lubage endale õhuvitamiine igasse päeva!</p>
        <h5>Telefon: +372 5383 0335</h5>
        <h5>E-post: info[ät]mail.ee</h5>
      </div>
      <div class="form-card col-md-6 p-4">
        <div class="col-6 py-2 align-self-start">
          <h3 class="form-label">Jata oma andmeid meile</h3>
        </div>
        <form class="row g-3 p-4">
          <div class="col-md-6 py-2">
            <label for="firstname" class="form-label">Eesnimi:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="formData.name"
              required
            />
          </div>
          <div class="col-md-6 py-2">
            <label for="lastname" class="form-label">Perekonnanimi:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="formData.name"
              required
            />
          </div>
          <div class="col-md-6 py-2">
            <label for="email" class="form-label">E-mail:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="formData.email"
              required
            />
          </div>
          <div class="col-md-6 py-2">
            <label for="telefon" class="form-label">Telefon:</label>
            <input
              type="tel"
              class="form-control"
              id="telefon"
              v-model="formData.telefon"
              required
            />
          </div>

          <div class="col-12 py-2">
            <label for="message" class="form-label"
              >Mis teid huvitab (Vabatahtlik):</label
            >
            <textarea
              id="message"
              class="form-control"
              v-model="formData.message"
              required
            ></textarea>
          </div>

          <div class="col-12 py-2 justify-content-start">
            <label class="form-label" for="projectName"> Vali huvitatav projekt: </label>
            <select
              v-model="formData.projectName"
              class="form-select"
              id="projectName"
              required
            >
              <option value="" disabled>Vali projekt</option>
              <option v-for="project in projects" :key="project" :value="project">
                {{ project.name }}
              </option>
              <option value="">Ükski neist</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        telefon: "",
        message: "",
        projectName: "",
      },
      projects: [],
    };
  },
  components: {
    NavigationBar,
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.contact-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  margin-top: 50px;
}

.form-card {
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-form {
  display: flex;
  flex-direction: column;
}

.form-label {
    text-align: start;
}

label {
  text-align: start;
}

input,
textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
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
</style>
