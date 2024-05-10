import { createRouter, createWebHistory } from "vue-router";
import FilmList from "../components/FilmList.vue";
import FilmDetail from "../components/FilmDetail.vue";

const routes = [
  { path: "/", component: FilmList },
  { path: "/films/:id", component: FilmDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
