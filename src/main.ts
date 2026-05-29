import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.directive("styleclass", StyleClass);
app.directive("ripple", Ripple);
app.use(PrimeVue, {
  ripple: true,
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: false,
      cssLayer: false,
    },
  },
});
app.use(createPinia());
app.use(router);

app.mount("#app");
