import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () =>
      import(/* webpackChunkName: "animal" */ "../views/Animal.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "/tiny-dancers",
  routes,
  scrollBehavior: (to, from, position) => {
    return position || position === null ? {x: 0, y: 0} : undefined;
  },
});

export default router;
