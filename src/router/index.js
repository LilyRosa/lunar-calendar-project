import { createRouter, createWebHistory } from "vue-router";
import Initial from "../components/Initial.vue";
import Main from "../components/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Initial,
      meta: {
        title: "Inicio",
      },
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Main,
      meta: {
        title: "Calendario",
      },
    },
  ],
});

export default router;
