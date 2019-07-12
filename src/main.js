import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";

import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
