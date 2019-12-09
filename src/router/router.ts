import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Animal from "../views/Animal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:animalName",
    name: "animal",
    props: true,
    component: Animal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "",
  routes,
  scrollBehavior: (to, from, position) => {
    return position || position === null ? { x: 0, y: 0 } : undefined;
  },
});

export default router;
