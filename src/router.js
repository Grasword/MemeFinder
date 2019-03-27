import Vue from "vue";
import Router from "vue-router";
import FavoritesPage from "./components/Favorites.vue";
import HomePage from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/favorites", name: "favorites", component: FavoritesPage }
  ]
});
