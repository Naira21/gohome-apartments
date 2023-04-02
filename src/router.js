import ApartmentPage from "./pages/ApartmentPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/apartments/:id",
    name: "apartment",
    component: ApartmentPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  routes,
  mode: history,
  history: createWebHistory(),
});
export default router;
