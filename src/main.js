import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import ContactPage from './pages/ContactPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import OpenPage from './pages/OpenPage.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/contact',
            component: ContactPage,
        },
        {
            path: '/projects',
            component: ProjectsPage,
        },
        {
            path: '/',
            component: OpenPage,
        },

    ],
});

const app = createApp(App)

app.use(router);
app.mount('#app')
