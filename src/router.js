import Vue from "vue";
import Router from "vue-router";
import FavoritesPage from "./components/Favorites.vue";
import HomePage from "./components/Home.vue";
import MemeDetails from "./components/memes/MemeDetails.vue";
import AddMeme from "./components/memes/AddMeme.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/favorites", name: "favorites", component: FavoritesPage },
    { path: "/meme/:id", props: true, name: "details", component: MemeDetails },
    { path: "/addmeme", name: "addmeme", component: AddMeme },
    { path: "*", redirect: "/" }
  ]
});
