import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Items from "./views/Items.vue";
import CreateItem from "./views/CreateItem.vue";
import UpdateItem from "./views/UpdateItem.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/items",
      name: "items",
      component: Items
    },
    {
      path: "/items/add",
      name: "create-item",
      component: CreateItem
    },
    {
      path: "/items/update/:id",
      name: "update-item",
      component: UpdateItem
    }
  ]
});
