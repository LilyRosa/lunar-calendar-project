import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
router.beforeEach((to) => {
  document.title = `${to.meta.title} | LilyRosa` || "Vue";
});
app.use(router);

app.mount("#app");
