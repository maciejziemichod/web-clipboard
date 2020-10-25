import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "bulma";
// https://dev.to/justaashir/bulma-vue-easy-setup-2b3

createApp(App)
  .use(store)
  .mount("#app");
